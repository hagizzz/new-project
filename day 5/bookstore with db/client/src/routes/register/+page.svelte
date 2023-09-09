
<script>
    import axios from "axios";
    axios.defaults.withCredentials = true;
    let username = ''
    let password = ''
    let cfPassword = ''

    async function handleRegister() {
        console.log(username, password)
        let res = await axios.post('http://localhost:3000/users/register', {
            username: username,
            password: password,
        })

        if (res.data.code === 200) {
            window.location.href = '/'
        }
        
    }
</script>

<h1 class="title">welcome to booktopia</h1>
<div class="form">
    <div>
        <h2>Sign Up To Booktopia</h2>
        <form>
            <p >Username:</p>
            <input bind:value={username} type="text" placeholder="Enter username"> 
            <p>Password:</p>
            <input bind:value={password} type="text" placeholder="Enter password"> 
            <p>Confirm Password: </p>
            <input bind:value={cfPassword} type="text" placeholder="Enter confirm password">
            
        </form>

        <br> <button on:click={handleRegister} class="signup">SIGN UP</button>
        <div class="bar"></div>
        
    </div>
</div>

<style>

    .title {
        margin-top: 150px;
    }

    .form {
        width: fit-content;
        padding: 10px 40px;
        outline: 0;
        border: none;
        border-radius: 7px;
        font-weight: 400;
        font-size: 16px;
        background: #fff;
        box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
        transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
        margin: 0 auto !important;
    }

    input {
        width: 480px;
        height: 30px;
        border: 1px solid #c3bdbd;
        border-radius: 5px;
        margin: 5px 0px;
        padding: 3px;
    }

    h1 {
        text-transform: capitalize;
        text-align: center;
    }

    h2 {
        text-align: center;
    }

    p {
        font-weight: bold;
        margin-bottom: 0;
        font-size: 16px;
    }

    .signup {
        width: 480px;
        height: 40px;
        background-color: #EF9595;
        border-radius: 5px;
        border: none;
        color: #F0F0F0;
        font-size: 16px;
        cursor: pointer;
        margin-bottom: 30px;
    }

    .signup:hover {
        background-color: #e48e8e;
    }

</style>