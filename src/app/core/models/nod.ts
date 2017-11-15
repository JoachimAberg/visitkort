export class Nod {
  caption: string;
  code: string;
  comments: {count: number};
  comments_disabled: boolean;
  date: number;
  dimensions: {height: number, width: number};
  display_src: string;
  gating_info?: any;
  id: string;
  is_vide: boolean;
  likes: {count: number};
  media_preview: string;
  owner: {id: 'string'};
  thumbnail_resources: [{config_height: number, config_width: number, src: string}];
  thumbnail_src: string;
  __typename: string;
}
