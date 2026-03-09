import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImageArray extends Struct.ComponentSchema {
  collectionName: 'components_image_image_arrays';
  info: {
    displayName: 'imageArray';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface PointsPoints extends Struct.ComponentSchema {
  collectionName: 'components_points_points';
  info: {
    displayName: 'points';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image-array': ImageImageArray;
      'points.points': PointsPoints;
    }
  }
}
