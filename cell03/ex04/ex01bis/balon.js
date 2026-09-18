$(document).ready(function () {
    const $balao = $('#balao')

    const MIN_SIZE = 200
    const MAX_SIZE = 400
    const GROW = 10
    const SHRINK = 5

    const colors = [
        'red',
        'green',
        'blue'
    ];

    let colorIndex = 0
    let size = MIN_SIZE;

    function applyStyle() {
        $balao.css({
            'width': size + 'px',
            'height': size + 'px',
            'backgroundColor': colors[colorIndex]
        })
    }

    function explode(){
        size = MIN_SIZE;
        colorIndex = 0;
        applyStyle();
    }

    $balao.on('click', () =>{
        size += GROW;
        colorIndex = (colorIndex + 1 ) % colors.length;

        if(size > MAX_SIZE){
            explode();
            return;
        }

        applyStyle()
    })

    $balao.mouseleave(() => {
        size = Math.max(MIN_SIZE, size - SHRINK);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        applyStyle()
    });

    applyStyle()
})