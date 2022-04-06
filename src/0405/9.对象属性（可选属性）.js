function myAxios(config) {
    console.log(config);
}
myAxios({ url: 'aaa/bbb' });
myAxios({ url: 'aaa/bbb', method: 'post' });
