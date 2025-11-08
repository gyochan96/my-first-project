/*-------------------------------------------------
デバッグコード（公開前に消しましょう）
-------------------------------------------------*/

document.head.innerHTML += `<style>
.debug-mode *, .debug-mode *::before, .debug-mode *::after {outline: solid 1px;}
.debug-mode *:nth-child(5n+0), .debug-mode *:nth-child(5n+0)::before, .debug-mode *:nth-child(5n+0)::after {outline-color: #f00;}
.debug-mode *:nth-child(5n+1), .debug-mode *:nth-child(5n+1)::before, .debug-mode *:nth-child(5n+1)::after {outline-color: #f0f;}
.debug-mode *:nth-child(5n+2), .debug-mode *:nth-child(5n+2)::before, .debug-mode *:nth-child(5n+2)::after {outline-color: #0c0;}
.debug-mode *:nth-child(5n+3), .debug-mode *:nth-child(5n+3)::before, .debug-mode *:nth-child(5n+3)::after {outline-color: #08f;}
.debug-mode *:nth-child(5n+4), .debug-mode *:nth-child(5n+4)::before, .debug-mode *:nth-child(5n+4)::after {outline-color: #f80;}
</style>`;

let DEBUG_MODE;
window.addEventListener('keydown', e => {
    if (e.key === 'Pause') {
        document.body.classList.toggle('debug-mode');
        DEBUG_MODE = !DEBUG_MODE;
    }
});

/*-------------------------------------------------
//デバッグコード
-------------------------------------------------*/
