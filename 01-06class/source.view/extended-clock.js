
class ExtendedClock extends Clock {
    constructor(options) {
        super(options);
        let { presicion = 1000 } = options;
        this.presicion = presicion;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.presicion);
    }
};

