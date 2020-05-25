export enum UserRoleType {
  masterAdmin = 'ROLE_MASTER_ADMIN',
  techAdmin = 'ROLE_TECH_ADMIN'
}

export const AdminRoleType2LabelMapping = {
  [UserRoleType.masterAdmin]: 'Master Admin',
  [UserRoleType.techAdmin]: 'Tech Admin'
};
