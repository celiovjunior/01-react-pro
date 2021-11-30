import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import '../styles/repositories.scss';

// interface para o useState
interface Repository {
    name: string;
    description: string;
    html_url: string;
}

//https://api.github.com/users/celiovjunior/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/celiovjunior/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map((repository, index) => {
                    return <RepositoryItem key={index} repository={repository}/>
                })}
            </ul>
        </section>
    )
}