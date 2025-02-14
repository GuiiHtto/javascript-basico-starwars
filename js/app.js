const LIST = [
    {
        id: 1,
        name: 'Master Yoda',
        avatar: 'images/yoda.png',
        alt: 'Lego figure of Master Yoda with green skin and a lightsaber'
    },
    
    {
        id: 2,
        name: 'Darth Vader',
        avatar: 'images/vader.png',
        alt: 'Lego figure of Darth Vader with black armor and a red lightsaber'
    },

    {
        id: 3,
        name: 'Luke Skywalker',
        avatar: 'images/luke.png',
        alt: 'Lego figure of Luke Skywalker with a lightsaber'
    },

    {
        id: 4,
        name: 'Princess Leia',
        avatar: 'images/leia.png',
        alt: 'Lego figure of Princess Leia with white dress and buns hairstyle'
    },

    {
        id: 5,
        name: 'Han Solo',
        avatar: 'images/hansolo.png',
        alt: 'Lego figure of Han Solo with a blaster'
    },

    {
        id: 6,
        name: 'Chewbacca',
        avatar: 'images/chewbacca.png',
        alt: 'Lego figure of Chewbacca with a bowcaster'
    },
    
    {
        id: 7,
        name: 'R2D2',
        avatar: 'images/r2d2.png',
        alt: 'Lego figure of R2D2, a blue and white astromech droid'
    },

    {
        id: 8,
        name: 'C3PO',
        avatar: 'images/c3po.png',
        alt: 'Lego figure of C3PO, a golden protocol droid'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Guilherme Henrique',
        characters: LIST,
        searchName:''
    },
    methods: {
       like(characterName) {
            alert(`You gave a like to ${characterName}`)
       },
       remove(id) {
           const list = this.characters

           const result = list.filter(item => {
                return item.id !== id
           })

           this.characters = result
       },
       search(){

            if (this.searchName === '') {
                alert('Please, type a character name')
                this.characters = LIST
                return
            }

            const list = this.characters = LIST

            const result = list.filter(item => {
                return item.name === this.searchName
            })

            if(result.length <= 0){
                alert('Character not found')
            } else {
                this.characters = result 
            }
        }
    }
})