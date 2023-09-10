export const ROLES = {
    USER: 'user',
    DESIGNER: 'designer',
    DEVELOPER: 'developer',
    ADMIN: 'admin',
    TESTER: 'tester',
    MANAGER: 'manager',
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
