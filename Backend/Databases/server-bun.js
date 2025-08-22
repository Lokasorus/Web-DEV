import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url) // bun gives you url in this way, can find many things about a url by url.
        if(url.pathname === '/'){
            return new Response('hello its ice tea', {status: 200}) //this is how bun gives response
        }else if(url.pathname === '/ice-tea'){
            return new Response('Ice tea is a good option', {status: 200}) //this is how bun gives response
        }else {
            return new Response('404 Not found', {status: 404})
        }
    },  // look for commas
     //bun gives you request and all things
     port: 3000,
     hostname: '127.0.0.1'

})