'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2973f90a.js');
const patch = require('./patch-15ea31af.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patch.patchEsm().then(() => {
  return index.bootstrapLazy([["peculiar-attribute-certificate-viewer_9.cjs",[[1,"peculiar-certificate-decoder",{"certificateExample":[1,"certificate-example"],"certificateDecoded":[32]}],[1,"peculiar-attribute-certificate-viewer",{"certificate":[1],"download":[4],"authKeyIdParentLink":[513,"auth-key-id-parent-link"],"authKeyIdSiblingsLink":[513,"auth-key-id-siblings-link"],"subjectKeyIdChildrenLink":[513,"subject-key-id-children-link"],"subjectKeyIdSiblingsLink":[513,"subject-key-id-siblings-link"],"isDecodeInProcess":[32]}],[1,"peculiar-csr-viewer",{"certificate":[513],"download":[4],"subjectKeyIdChildrenLink":[513,"subject-key-id-children-link"],"subjectKeyIdSiblingsLink":[513,"subject-key-id-siblings-link"],"view":[513],"isDecodeInProcess":[32]}],[1,"peculiar-certificate-viewer",{"certificate":[513],"download":[516],"authKeyIdParentLink":[513,"auth-key-id-parent-link"],"authKeyIdSiblingsLink":[513,"auth-key-id-siblings-link"],"subjectKeyIdChildrenLink":[513,"subject-key-id-children-link"],"subjectKeyIdSiblingsLink":[513,"subject-key-id-siblings-link"],"issuerDnLink":[513,"issuer-dn-link"],"view":[513],"isDecodeInProcess":[32]}],[1,"peculiar-button-split",{"onClick":[16],"fill":[1],"actions":[16],"open":[32]}],[1,"peculiar-text-hider",{"opened":[1540]},[[0,"textExpand","textExpandHandler"]]],[1,"peculiar-link",{"href":[513],"type":[513]}],[1,"peculiar-typography",{"type":[513],"color":[1],"align":[1],"ellipsis":[4],"monospace":[4]}],[1,"peculiar-button",{"fill":[1],"disabled":[516],"href":[1],"target":[1],"onClick":[16]}]]],["peculiar-certificate-summary_3.cjs",[[1,"peculiar-certificate-summary",{"certificate":[16],"showIssuer":[4,"show-issuer"]}],[1,"peculiar-circular-progress",{"size":[2],"width":[2]}],[1,"peculiar-highlight-words",{"search":[1]}]]],["peculiar-certificates-viewer.cjs",[[1,"peculiar-certificates-viewer",{"certificates":[16],"filterWithSearch":[4,"filter-with-search"],"highlightWithSearch":[4,"highlight-with-search"],"search":[32],"certificatesDecoded":[32],"expandedRow":[32],"certificateSelectedForDetails":[32],"isDecodeInProcess":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
