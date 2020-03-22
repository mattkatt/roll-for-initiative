function setDefaults() {
    return {
        darkMode: false
    };
}

export const Settings = {
    state: () => setDefaults(),
    mutations: {
        updateSetting(state, payload) {
            state[payload.setting] = payload.value;
        },
        resetSettings(state, payload) {
            state = payload;
        }
    },
    actions: {
        reset (context) {
            let defaults = setDefaults();
            context.commit('resetSettings', defaults);
        }
    }
};
