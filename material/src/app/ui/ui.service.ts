import { Injectable } from '@angular/core';

@Injectable()
export class UIService {
    product_image_path = 'assets/images-demo/products/';

    getProducts() {
        return [
            {
                name: 'Silver Watch',
                img: this.product_image_path + 'watch-silver.png',
                sash: 'sash-primary',
                sash_icon: 'star',
                sash_text: 'Featured'
            }, {
                name: 'Black Watch',
                img: this.product_image_path + 'watch-black.png',
                sash: 'sash-info',
                sash_icon: 'card_giftcard',
                sash_text: 'Gift'
            }, {
                name: 'Red Watch',
                img: this.product_image_path + 'watch-edition-red.png',
                sash: 'sash-danger',
                sash_icon: 'flash_on',
                sash_text: 'Popular'
            }, {
                name: 'Blue Watch',
                img: this.product_image_path + 'watch-edition-blue.png',
                sash: '',
                sash_icon: 'info',
                sash_text: 'Featured'
            }, {
                name: 'Black Watch',
                img: this.product_image_path + 'watch-edition-black.png',
                sash: 'sash-danger',
                sash_icon: 'favorite',
                sash_text: 'Best Choice'
            }, {
                name: 'Sport Watch',
                img: this.product_image_path + 'watch-sport-blue.png',
                sash: 'sash-success',
                sash_icon: 'new_releases',
                sash_text: 'New'
            }, {
                name: 'Sport Watch',
                img: this.product_image_path + 'watch-sport-green.png',
                sash: 'sash-warning',
                sash_icon: 'money_off',
                sash_text: 'Free Shipping'
            }, {
                name: 'Sport Watch',
                img: this.product_image_path + 'watch-sport-white.png',
                sash: 'sash-white',
                sash_icon: 'star',
                sash_text: 'Featured'
            }
        ]
    }

    getTestimonials() {
        return [
            {
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ratione consequuntur ut placeat.',
                avatar: 'assets/images-demo/avatars/1.jpg',
                name: 'Jason Bourne',
                title: 'Senior PM'
            }, {
                content: 'Cum suscipit voluptatem modi repellat consequuntur aliquid nostrum, dolore pariatur consequatur nobis',
                avatar: 'assets/images-demo/avatars/2.jpg',
                name: 'Bella Swan',
                title: 'VP Product'
            }, {
                content: 'Temporibus nesciunt quod magnam dicta ea, quae minima tempore eiciendis nisi ab, perferendis',
                avatar: 'assets/images-demo/avatars/3.jpg',
                name: 'Min Chan',
                title: 'Engineer Lead'
            }
        ]
    }
}