import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectInitiativeSection extends Struct.ComponentSchema {
  collectionName: 'components_project_initiative_sections';
  info: {
    displayName: 'Initiative Section';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ProjectProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_project_project_sections';
  info: {
    displayName: 'Project Section';
  };
  attributes: {
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.initiative-section': ProjectInitiativeSection;
      'project.project-section': ProjectProjectSection;
    }
  }
}
