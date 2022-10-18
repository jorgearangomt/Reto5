package com.example.reto3.service;

import com.example.reto3.entities.Message;
import com.example.reto3.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }
    public Optional<Message>getById(int idMessage) {
        return messageRepository.getById(idMessage);
    }
    public Message save(Message p){
        if(p.getIdMessage()==null){
            return messageRepository.save(p);
        }else {
            Optional<Message> e = messageRepository.getById(p.getIdMessage());
            if (e.isPresent()){
                return p;
            }else {
                return messageRepository.save(p);
            }
        }
    }
    public Message update(Message p){
        if(p.getIdMessage()!=null){
            Optional<Message> q = messageRepository.getById(p.getIdMessage());
            if (q.isPresent()){
                if(p.getMessageText()!=null){
                    q.get().setMessageText(p.getMessageText());
                }
                messageRepository.save(q.get());
                return q.get();
            }else{
                return p;
            }

        }else{
            return  p;
        }
    }
    public boolean delete(int idMessage){
        Optional<Message>p= messageRepository.getById(idMessage);
        if (p.isPresent()){
            messageRepository.delete(p.get());
            return true;
        }else{
            return false;
        }
    }
}
