// return [csr, private_key]
async function gen_csr(csrFields) {
  //CN 2.5.4.3
  const commonName = csrFields.commonName
  //SAN 2.5.29.17 - 3
  const subjectAltName_email = csrFields.subjectAltName_email
  //SAN 2.5.29.17 - 2
  const subjectAltName_dns = csrFields.subjectAltName_dns
  //O 2.5.4.10
  const organizationName = csrFields.organizationName
  //OU 2.5.4.11
  const organizationalUnitName = csrFields.organizationalUnitName
  //L 2.5.4.7
  const localityName = csrFields.localityName
  //C 2.5.4.6
  const countryName = csrFields.countryName
  //Subject Name
  const subjectName = 'CN=' + commonName
      + ',O=' + organizationName
      + ',OU=' + organizationalUnitName
      + ',L=' + localityName
      + ',C=' + countryName

  //RSA-4096
  const algorithm  = {
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-256",
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1])
  }
  //Keys
  const keys = await crypto.subtle.generateKey(algorithm, true, ["sign", "verify"]);
  //console.log( x509.PemConverter.encode( keys.publicKey , "public key" ) );
  const spki_public = await crypto.subtle.exportKey("spki", keys.publicKey)
  console.log( x509.PemConverter.encode( spki_public, "public key" ) )

  //#region Key Usages Extension
  const keyUsage = {
    digitalSignature: true,
    nonRepudiation: false,
    keyEncipherment: true,
    dataEncipherment: false,
    keyAgreement: false,
    keyCertSign: false,
    cRLSign: false,
    encipherOnly: false,
    decipherOnly: false,
    flags: 0
  }
  if (keyUsage.digitalSignature === true) {
    keyUsage.flags |= x509.KeyUsageFlags.digitalSignature;
  }
  if (keyUsage.nonRepudiation === true) {
    keyUsage.flags |= x509.KeyUsageFlags.nonRepudiation;
  }
  if (keyUsage.keyEncipherment === true) {
    keyUsage.flags |= x509.KeyUsageFlags.keyEncipherment;
  }
  if (keyUsage.dataEncipherment === true) {
    keyUsage.flags |= x509.KeyUsageFlags.dataEncipherment;
  }
  if (keyUsage.keyAgreement === true) {
    keyUsage.flags |= x509.KeyUsageFlags.keyAgreement;
  }
  if (keyUsage.keyCertSign === true) {
    keyUsage.flags |= x509.KeyUsageFlags.keyCertSign;
  }
  if (keyUsage.crlSign === true) {
    keyUsage.flags |= x509.KeyUsageFlags.crlSign;
  }
  if (keyUsage.encipherOnly === true) {
    keyUsage.flags |= x509.KeyUsageFlags.encipherOnly;
  }
  if (keyUsage.decipherOnly === true) {
    keyUsage.flags |= x509.KeyUsageFlags.decipherOnly;
  }
  //#endregion


  //#region Certificate Attributes & Extensions
  const attributes = [];
  const extensions = [];
  // 2.5.29.15
  extensions.push( new x509.KeyUsagesExtension(keyUsage.flags, true));
  // 2.5.29.17
  extensions.push(
    await new x509.SubjectAlternativeNameExtension({
      email:[subjectAltName_email],
      dns:  [subjectAltName_dns]
    }, true)
  );
  //#endregion

  //PKCS#10 CSR
  const csr = await x509.Pkcs10CertificateRequestGenerator.create({
    name: subjectName ,
    signingAlgorithm: algorithm,
    keys: keys,
    extensions,
    attributes
  });
  //PKCS#8 KEY
  const pkcs8_private = await crypto.subtle.exportKey("pkcs8", keys.privateKey);
  //PEM output
  return ( [csr.toString("pem"), x509.PemConverter.encode( pkcs8_private, "private key" )] )
};
// return crt
async function gen_cert(ca_pem, ca_private, csr_pem) {
   const algorithm  = {
     name: "RSASSA-PKCS1-v1_5",
     hash: "SHA-256"
   }
   const root = new x509.X509Certificate(ca_pem);
   const csr = new x509.Pkcs10CertificateRequest(csr_pem);
   const prv = await crypto.subtle.importKey(
     "pkcs8",
     x509.PemConverter.decode(ca_private)[0],
     algorithm,
     true,
     ["sign"]
   );

   const cert = await x509.X509CertificateGenerator.create({
     serialNumber: "02",
     notBefore: new Date("2020/01/01"),
     notAfter: new Date("2022/01/02"),
     signingAlgorithm: csr.signatureAlgorithm,
     extensions: csr.extensions,
     issuer: root.subject,
     subject: csr.subject,
     publicKey: await csr.publicKey.export(crypto),
     signingKey: prv,
   });
   console.log(root )
   console.log(csr)
   console.log(cert)
   return cert.toString("pem");
 };
// return [ca, private_key]
async function gen_ca(name){
  const algorithm  = {
   name: "RSASSA-PKCS1-v1_5",      //+ ',DC=' + 'dps'
24
      //+ ',DC=' + 'ohio'
25
      //+ ',DC=' + 'gov'
   hash: "SHA-256",
   modulusLength: 4096,
   publicExponent: new Uint8Array([1, 0, 1])
  }
  const keys = await crypto.subtle.generateKey(algorithm, true, [
    "sign",
    "verify",
  ]);

  const cert = await x509.X509CertificateGenerator.createSelfSigned({
    serialNumber: "01",
    notBefore: new Date("2020/01/01"),
    notAfter: new Date("2022/01/02"),
    name: 'CN=' + name,
    subject: 'CN=' + name,
    issuer: 'CN=' + name,
    signingAlgorithm: algorithm,
    extensions: [
      new x509.BasicConstraintsExtension(true, 2, true),
      new x509.KeyUsagesExtension(
          x509.KeyUsageFlags.keyCertSign |
          x509.KeyUsageFlags.cRLSign |
          x509.KeyUsageFlags.digitalSignature |
          x509.KeyUsageFlags.keyEncipherment,
        true
      ),
    ],
    keys
  });
  //cert.subject =  'CN=' + name;
  //cert.issuer = 'CN=' + name;
  console.log(cert)
  const prv = await crypto.subtle.exportKey("pkcs8", keys.privateKey);
  const pem = x509.PemConverter.encode(prv, "PRIVATE KEY");

  return [cert.toString("pem"), pem];
}
