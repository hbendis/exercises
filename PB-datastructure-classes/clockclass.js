class Clock {
    constructor(template) {
        this.timer;
        this.template = template;
    }
    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let string = this.template['template'];
        let output = string
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }
}
let clock = new Clock({
    template: 'h:m:s'
});
clock.start();
clock.timer = setTimeout(clock.stop, 10000); // stops after 10 seconds