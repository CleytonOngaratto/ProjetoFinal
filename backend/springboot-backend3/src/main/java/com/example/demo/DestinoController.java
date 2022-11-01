package com.example.demo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class DestinoController {
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	
	
	//Read todos os destinos
	@GetMapping("/destinos")
	public List<Destino> getAllDestinos(){
		return destinoRepository.findAll();
	}
	
	//Read um destino by id
	@GetMapping("/destinos/{id}")
	public ResponseEntity<Destino> getDestinoById(@PathVariable Long id){
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("Destino nao existe com o id: " + id));
		return ResponseEntity.ok(destino);
	}
	
	
	
	//Create
	@PostMapping("/destinos")
	public Destino createDestino(@RequestBody Destino destino) {
		return destinoRepository.save(destino);
	
	}
	
	
	
	//Update
	@PutMapping("/destinos/{id}")
	public ResponseEntity<Destino> updateDestino(@PathVariable Long id, @RequestBody Destino destinoDetails) {
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("Destino não existe com id: " + id ));
		
		destino.setOrigem(destinoDetails.getOrigem());
		destino.setDestino(destinoDetails.getDestino());
		
		Destino updatedDestino = destinoRepository.save(destino);
		
		return ResponseEntity.ok(updatedDestino);
		
	}
	
	
	//Delete
	@DeleteMapping("/destinos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDestino (@PathVariable Long id) {
		Destino destino = destinoRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("Destino não existe com id : " + id ));
		
		destinoRepository.delete(destino);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	
	

	
	
	
	

}
