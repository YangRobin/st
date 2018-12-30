
export default class Tool {
  static trim (params) {
    return params.replace(/^\s+|$\s+/igm)
  };
}
