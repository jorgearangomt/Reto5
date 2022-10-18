package com.example.reto3.service;

import com.example.reto3.entities.Admin;
import com.example.reto3.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;
    public List<Admin> getAll(){
        return adminRepository.getAll();
    }

    public Optional<Admin> getAdmin(int id){
        return adminRepository.getAdmin(id);
    }

    public Admin save(Admin a){
        if(a.getId()==null){
            return adminRepository.save(a);
        }else{
            Optional<Admin> e = adminRepository.getAdmin(a.getId());
            if(e.isPresent()){
                return a;
            }else {
                return adminRepository.save(a);
            }
        }

    }
    public Admin update(Admin u){

        if (u.getId()!=null){
            Optional<Admin> m = adminRepository.getAdmin(u.getId());
            if(m.isPresent()){
                // se hace el for para no tener que validar cada campo manualmente
                // sino tomar el campo en el clico for
                for (Field f : u.getClass().getDeclaredFields()) {
                    f.setAccessible(true);
                    Object value;
                    try {
                        value = f.get(u);
                        if (value != null) {
                            //System.out.println("prueba");
                            f.set(m.get(), value);
                        }
                    } catch (IllegalArgumentException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    } catch (IllegalAccessException ex) {
                        Logger.getLogger(CategoryService.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                adminRepository.save(m.get());
                return m.get();
            }else{
                return u;
            }
        }else{
            return u;
        }
    }
    public boolean delete(int id){
        Optional<Admin> d = adminRepository.getAdmin(id);
        boolean state = false;
        if (d.isPresent()){
            adminRepository.delete(d.get());
            state = true;
        }
        return state;
    }
}
