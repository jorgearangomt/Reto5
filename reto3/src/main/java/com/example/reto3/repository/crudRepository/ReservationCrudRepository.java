package com.example.reto3.repository.crudRepository;

import com.example.reto3.entities.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation,Integer> {
    @Query("SELECT c.client,COUNT(c.client) FROM Reservation AS c group by c.client order by COUNT (c.client) DESC")
    public List<Object[]> getTopClients();

    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date d1, Date d2);

    public List<Reservation> findAllByStatus(String sts);
}
