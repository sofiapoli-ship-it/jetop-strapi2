import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectInitiativeSection extends Struct.ComponentSchema {
  collectionName: 'components_project_initiative_sections';
  info: {
    displayName: 'Initiative Section';
  };
  attributes: {
    testo: Schema.Attribute.Blocks;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
  };
}

export interface ProjectMetatag extends Struct.ComponentSchema {
  collectionName: 'components_project_metatags';
  info: {
    displayName: 'Metatag';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    descrizione: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    titolo: Schema.Attribute.String;
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
    testo: Schema.Attribute.Blocks;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    titolo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.initiative-section': ProjectInitiativeSection;
      'project.metatag': ProjectMetatag;
      'project.project-section': ProjectProjectSection;
    }
  }
}
