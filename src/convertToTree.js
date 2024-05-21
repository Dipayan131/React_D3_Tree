export const convertToTree = (data) => {
    const processNode = (obj, name) => {
      const node = { name, children: [], details: null };
      let ignoredChildren = [];
  
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          const childNode = processNode(obj[key], key);
          if (childNode.children.length !== 7) {
            node.children.push(childNode);
          } else {
            ignoredChildren.push(childNode);
          }
        }
      }
  
      if (ignoredChildren.length > 0) {
        node.ignoredChildren = ignoredChildren;
      }
  
      return node;
    };
  
    return processNode(data, 'OSINT Framework');
  };
  