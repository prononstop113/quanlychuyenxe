package model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;

@Data
@Entity
@Table(name = "chuyenxe", schema = "quanly")
public class Buses implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -4511810634388746694L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idchuyenxe;
	
	@NotNull
	private String masochuyen;
	
	@NotNull
	@ManyToOne
    @JoinColumn(name="idlaixe", nullable=false)
    private Driver laixe;
	
	@NotNull
	@ManyToOne
    @JoinColumn(name="idphuxe", nullable=false)
    private Driver phuxe;
	
	@JsonIdentityInfo(
	        generator = ObjectIdGenerators.PropertyGenerator.class,
	        property = "idtuyenxe")
	@OneToMany(mappedBy = "chuyenxe",fetch = FetchType.LAZY)
    private List<Route> lotrinh;
	
	
	@NotNull
	@ManyToOne
    @JoinColumn(name="idxekhach", nullable=false)
    private Bus xekhach;
	
	@NotNull
	private int sokhach;
	
	@NotNull
	private int gia;
}
	
	
	
	
