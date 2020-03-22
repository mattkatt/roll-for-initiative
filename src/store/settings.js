function setDefaults() {
    return {
        darkMode: false
    };
}

export const Settings = {
    state: () => setDefaults(),
    mutations: {
        loadSettings(state, payload) {
            state = Object.assign(state, payload)
        },
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
