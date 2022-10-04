package io.takima.demo;

import io.takima.demo.exceptions.BookAlreadyAvailableException;
import io.takima.demo.exceptions.BookAlreadyBorrowedException;
import io.takima.demo.exceptions.BookBorrowerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RoomService {

    private final RoomDAO roomDAO;

    @Autowired
    public RoomService(RoomDAO roomDAO) {
        this.roomDAO = roomDAO;
    }

    public Iterable<Room> listRooms() {
        return roomDAO.findAll();
    }

}
