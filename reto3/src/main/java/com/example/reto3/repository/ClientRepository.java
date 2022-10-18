package com.example.reto3.repository;

import com.example.reto3.entities.Client;
import com.example.reto3.repository.crudRepository.ClientCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ClientRepository {

    @Autowired
    private ClientCrudRepository clientCrudRepository;

    //trae los objetos en la tabla
    public List<Client> getAll(){
        return (List<Client>) clientCrudRepository.findAll();
    }
    public Optional<Client> getById(int idClient){
        return clientCrudRepository.findById(idClient);
    }
    //guarda datos o los actualiza
    public Client save(Client c){
        return clientCrudRepository.save(c);
    }
    //borra datos
    public void delete(Client c){
        clientCrudRepository.delete(c);
    }
}
