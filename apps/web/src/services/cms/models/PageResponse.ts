/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PageResponse = {
  data?: {
    id?: string;
    attributes?: {
      name?: string;
      slug?: string;
      content?: string;
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      createdBy?: {
        data?: {
          id?: string;
          attributes?: {
            firstname?: string;
            lastname?: string;
            username?: string;
            email?: string;
            resetPasswordToken?: string;
            registrationToken?: string;
            isActive?: boolean;
            roles?: {
              data?: Array<{
                id?: string;
                attributes?: {
                  name?: string;
                  code?: string;
                  description?: string;
                  users?: {
                    data?: Array<{
                      id?: string;
                      attributes?: any;
                    }>;
                  };
                  permissions?: {
                    data?: Array<{
                      id?: string;
                      attributes?: {
                        action?: string;
                        subject?: string;
                        properties?: any;
                        conditions?: any;
                        role?: {
                          data?: {
                            id?: string;
                            attributes?: any;
                          };
                        };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: any;
                          };
                        };
                        updatedBy?: {
                          data?: {
                            id?: string;
                            attributes?: any;
                          };
                        };
                      };
                    }>;
                  };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: any;
                    };
                  };
                  updatedBy?: {
                    data?: {
                      id?: string;
                      attributes?: any;
                    };
                  };
                };
              }>;
            };
            blocked?: boolean;
            preferedLanguage?: string;
            createdAt?: string;
            updatedAt?: string;
            createdBy?: {
              data?: {
                id?: string;
                attributes?: any;
              };
            };
            updatedBy?: {
              data?: {
                id?: string;
                attributes?: any;
              };
            };
          };
        };
      };
      updatedBy?: {
        data?: {
          id?: string;
          attributes?: any;
        };
      };
    };
  };
  meta?: any;
};