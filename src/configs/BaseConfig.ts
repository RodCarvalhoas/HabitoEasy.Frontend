import IConfig from "./IConfig";

class BaseConfig {
    config: IConfig;

    constructor() {
        this.config = {
            businessApiUrl: '',
        };
    }

    init = () => {
        this.config.businessApiUrl = process.env.REACT_APP_API_URL!;
    }
}

export default new BaseConfig();