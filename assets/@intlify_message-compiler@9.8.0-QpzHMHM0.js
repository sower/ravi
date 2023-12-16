/*!
  * message-compiler v9.8.0
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const o=/\{([0-9a-zA-Z]+)\}/g;function t(e,..._){return _.length===1&&C(_[0])&&(_=_[0]),(!_||!_.hasOwnProperty)&&(_={}),e.replace(o,(I,N)=>_.hasOwnProperty(N)?_[N]:"")}const C=e=>e!==null&&typeof e=="object",E={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},T={[E.EXPECTED_TOKEN]:"Expected token: '{0}'",[E.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[E.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[E.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[E.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[E.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[E.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[E.EMPTY_PLACEHOLDER]:"Empty placeholder",[E.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[E.INVALID_LINKED_FORMAT]:"Invalid linked format",[E.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[E.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[E.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[E.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[E.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[E.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function O(e,_,I={}){const{domain:N,messages:L,args:D}=I,A=t((L||T)[e]||"",...D||[]),n=new SyntaxError(String(A));return n.code=e,_&&(n.location=_),n.domain=N,n}export{E as C,O as c};
