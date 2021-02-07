
import { productThumbnailPath } from '@/components/maketplace/Product/ProductThumbnailPath'

export const ProductTile = {
    name: 'ProductTile',
    data(){
        return{
            clicks: 0,
            placeholder: require('@/assets/placeholder.jpg'),
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed:{
        productLink () {
            return{

            }
        },
        thumbnail(){
            
            return{
                thumbnail: productThumbnailPath(this.product)
            }
        },
        thumbnailObj () {
            return {
                src: this.thumbnail,
                loading: this.placeholder,
            }
        },


    }
}