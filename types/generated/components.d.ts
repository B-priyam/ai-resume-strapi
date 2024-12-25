import type { Schema, Struct } from '@strapi/strapi';

export interface AchievementAchievement extends Struct.ComponentSchema {
  collectionName: 'components_achievement_achievements';
  info: {
    description: '';
    displayName: 'Achievement';
  };
  attributes: {
    achievementDescription: Schema.Attribute.String;
  };
}

export interface CertificateCertificate extends Struct.ComponentSchema {
  collectionName: 'components_certificate_certificates';
  info: {
    displayName: 'Certificate';
  };
  attributes: {
    certificateDescription: Schema.Attribute.Text;
    certificateName: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'apps';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummary: Schema.Attribute.Text;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    projectDescription: Schema.Attribute.Text;
    projectName: Schema.Attribute.String;
    projectUrl: Schema.Attribute.String;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'achievement.achievement': AchievementAchievement;
      'certificate.certificate': CertificateCertificate;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'project.project': ProjectProject;
      'skills.skills': SkillsSkills;
    }
  }
}
