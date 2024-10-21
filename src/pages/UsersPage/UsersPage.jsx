import { useEffect, useState } from "react";
import { Search } from "../../components/Search/Search";

export function UsersPage() {
    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = users.filter((user) => {
        return user.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <section>
            <div className="container">
                <Search handleChange={handleChange} />
                {
                    filteredProducts.length ?
                        filteredProducts.map((user) => {
                            return (
                                <div className="user">{user.name}</div>
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </section>
    )
}