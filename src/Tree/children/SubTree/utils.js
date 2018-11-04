export function calculateProps(root, direction) {
  let dxParent = 0;
  let dyParent = 0;
  let linkConfig;

  if (root.parent) {
    switch (direction) {
      case "right":
        dxParent = root.x - root.parent.x;
        dyParent = root.y - root.parent.y;
        linkConfig = {
          type: "curvedHorizontal",
          arrowheadDirection: "end"
        };
        break;
      case "down":
        dxParent = root.y - root.parent.y;
        dyParent = root.x - root.parent.x;
        linkConfig = {
          type: "curvedVertical",
          arrowheadDirection: "start"
        };
        break;
      case "left":
        dxParent = root.parent.x - root.x;
        dyParent = root.parent.y - root.y;
        linkConfig = {
          type: "curvedHorizontal",
          arrowheadDirection: "start"
        };
        break;
      case "up":
        dxParent = root.parent.y - root.y;
        dyParent = root.parent.x - root.x;
        linkConfig = {
          type: "curvedVertical",
          arrowheadDirection: "end"
        };
        break;
      default:
        dxParent = root.y - root.parent.y;
        dyParent = root.x - root.parent.x;
        linkConfig = {
          type: "curvedVertical",
          arrowheadDirection: "start"
        };
    }
  }

  return {
    dxParent,
    dyParent,
    linkConfig
  };
}
