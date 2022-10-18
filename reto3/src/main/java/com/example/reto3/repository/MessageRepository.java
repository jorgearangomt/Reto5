package com.example.reto3.repository;

import com.example.reto3.entities.Message;
import com.example.reto3.repository.crudRepository.MessageCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MessageRepository {

    @Autowired
    private MessageCrudRepository messageCrudRepository;

    //trae los objetos en la tabla
    public List<Message> getAll(){
        return (List<Message>) messageCrudRepository.findAll();
    }
    public Optional<Message> getById(int idMessage){
        return messageCrudRepository.findById(idMessage);
    }

    //guarda datos o los actualiza
    public Message save(Message p){
        return messageCrudRepository.save(p);
    }

    //borra datos
    public void delete(Message p){
        messageCrudRepository.delete(p);
    }
}
