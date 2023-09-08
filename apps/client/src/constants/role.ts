export const ROLES = {
    USER: 'user',
    DESIGNER: 'designer',
    DEVELOPER: 'developer',
    ADMIN: 'admin',
    TESTER: 'tester',
    MANAGER: 'manager',
} as const;

export type Roles = (typeof ROLES)[keyof typeof ROLES];
