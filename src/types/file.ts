export enum FileType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export interface IFile {
  id: number;
  name: string;
  mimetype: string;
  size: number;
  type: FileType;
}
