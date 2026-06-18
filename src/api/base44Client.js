const noop = async () => null;
const emptyList = async () => [];

const entityStub = new Proxy({}, {
  get: () => ({
    list: emptyList,
    filter: emptyList,
    get: noop,
    create: noop,
    update: noop,
    delete: noop,
  }),
});

export const base44 = {
  auth: {
    isAuthenticated: async () => false,
    me: async () => null,
    loginViaEmailPassword: noop,
    loginWithProvider: noop,
    logout: noop,
    register: noop,
    verifyOtp: async () => ({}),
    setToken: noop,
    resendOtp: noop,
    resetPasswordRequest: noop,
    resetPassword: noop,
    redirectToLogin: noop,
  },
  entities: new Proxy({}, { get: () => entityStub }),
  integrations: {
    Core: {
      SendEmail: noop,
      InvokeLLM: async () => ({ response: '' }),
    },
  },
};
