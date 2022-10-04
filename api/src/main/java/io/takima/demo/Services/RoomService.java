package io.takima.demo.Services;

import io.takima.demo.DAO.RoomDAO;
import io.takima.demo.Entities.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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

    public Optional<Room> findRoomById(Long id) {return roomDAO.findById(id);}

    public void deleteRoomById(Room room){ roomDAO.delete(room);}

    public void updateRoom(Room room){
        Room oldRoom = roomDAO.findById(room.getId()).get();
        oldRoom= room;
        roomDAO.save(oldRoom);
    }

}
