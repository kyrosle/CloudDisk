
export enum fileType {
  Folder,
  File
}

export function FileIndexToType(index: number): fileType {
  if (index == 1) {
    return fileType.Folder;
  } else {
    return fileType.File;
  }
}


export class fileTreeNode {
  name: string;
  type: number;
  children: fileTreeNode[];

  constructor(name: string, type: number) {
    this.name = name;
    this.type = type;
    this.children = [];
  }
}

export function parseJson(json: any): fileTreeNode {
  const node = new fileTreeNode(json.name, json.type);

  if (json.children && Array.isArray(json.children)) {
    for (const child of json.children) {
      node.children.push(parseJson(child));
    }
  }

  return node;
}

