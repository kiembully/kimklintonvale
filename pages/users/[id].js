import utilStyles from '../../styles/utils.module.css'

export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(res => {
        return {
            params: { id: res.id.toString() }
        }
    })
    
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (ctx) => {

    const id = ctx.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {user: data}
    }
}

const Users = ({ user }) => {
    return (
        <div>
            <h1 className={utilStyles.heading2Xl}>{ user.name }</h1>
            <p className={utilStyles.lightText}>{ user.email }</p>
            <p className={utilStyles.lightText}>{ user.website }</p>
            <p className={utilStyles.lightText}>{ user.address.city }</p>
        </div>
    );
}

export default Users;