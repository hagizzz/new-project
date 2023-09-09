
<script>
    import axios from "axios";
    import { onMount } from "svelte";

    let books = []

    async function fetchBooks() {
       let res = await axios.get('http://localhost:3000/books')
       books = res.data.data
       console.log(books)
    }

    onMount(() => {
        fetchBooks()
    })

</script>

<h1>Home page</h1>

<div class='book-container'>
    {#each books as book }

    <div class = 'book-item'>
        <p>{book.title}</p> by <p class = 'book-author'>{book.author}</p>
        <img src="http://localhost:3000/{book.thumbnailImage}" alt="">
    </div>
    
    {/each}
</div>

<style>
    p {
        display: inline;
    }

    .book-container {
        display: flex;
    }
    .book-item {
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
        width: 300px;
    }

    .book-item .book-author {
        color: red;
    }

    .book-item img {
        width: 200px
    }

</style>