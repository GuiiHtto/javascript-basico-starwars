

const LIST = [
    {
        id: 1,
        name: 'Master Yoda',
        avatar: 'images/yoda.png'

    },
    
    {
        id: 2,
        name: 'Darth Vader',
        avatar: 'images/vader.png'

    },

    {
        id: 3,
        name: 'Luke Skywalker',
        avatar: 'images/luke.png'

    },

    {
        id: 4,
        name: 'Princess Leia',
        avatar: 'images/leia.png'

    },

    {
        id: 5,
        name: 'Han Solo',
        avatar: 'images/hansolo.png'

    },

    {
        id: 6,
        name: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    
    {
        id: 7,
        name: 'R2D2',
        avatar: 'images/r2d2.png'
    },

    {
        id: 8,
        name: 'C3PO',
        avatar: 'images/c3po.png'
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