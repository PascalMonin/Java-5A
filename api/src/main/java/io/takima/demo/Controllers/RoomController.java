package io.takima.demo.Controllers;

import io.takima.demo.Entities.Room;
import io.takima.demo.Services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {

    private final RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/rooms")
    public Iterable<Room> listBooks() {
        return this.roomService.listRooms();
    }

}
