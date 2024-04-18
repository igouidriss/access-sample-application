package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table3;
import com.mycompany.myapp.repository.Table3Repository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Table3}.
 */
@RestController
@RequestMapping("/api/table-3-s")
@Transactional
public class Table3Resource {

    private final Logger log = LoggerFactory.getLogger(Table3Resource.class);

    private static final String ENTITY_NAME = "accessSampleApplicationTable3";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table3Repository table3Repository;

    public Table3Resource(Table3Repository table3Repository) {
        this.table3Repository = table3Repository;
    }

    /**
     * {@code POST  /table-3-s} : Create a new table3.
     *
     * @param table3 the table3 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table3, or with status {@code 400 (Bad Request)} if the table3 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table3> createTable3(@RequestBody Table3 table3) throws URISyntaxException {
        log.debug("REST request to save Table3 : {}", table3);
        if (table3.getId() != null) {
            throw new BadRequestAlertException("A new table3 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table3 = table3Repository.save(table3);
        return ResponseEntity.created(new URI("/api/table-3-s/" + table3.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table3.getId().toString()))
            .body(table3);
    }

    /**
     * {@code PUT  /table-3-s/:id} : Updates an existing table3.
     *
     * @param id the id of the table3 to save.
     * @param table3 the table3 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table3,
     * or with status {@code 400 (Bad Request)} if the table3 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table3 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table3> updateTable3(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table3 table3)
        throws URISyntaxException {
        log.debug("REST request to update Table3 : {}, {}", id, table3);
        if (table3.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table3.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table3Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table3 = table3Repository.save(table3);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table3.getId().toString()))
            .body(table3);
    }

    /**
     * {@code PATCH  /table-3-s/:id} : Partial updates given fields of an existing table3, field will ignore if it is null
     *
     * @param id the id of the table3 to save.
     * @param table3 the table3 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table3,
     * or with status {@code 400 (Bad Request)} if the table3 is not valid,
     * or with status {@code 404 (Not Found)} if the table3 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table3 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table3> partialUpdateTable3(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table3 table3
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table3 partially : {}, {}", id, table3);
        if (table3.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table3.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table3Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table3> result = table3Repository
            .findById(table3.getId())
            .map(existingTable3 -> {
                if (table3.getNumLigne1() != null) {
                    existingTable3.setNumLigne1(table3.getNumLigne1());
                }
                if (table3.getResort2() != null) {
                    existingTable3.setResort2(table3.getResort2());
                }
                if (table3.getResvNameId3() != null) {
                    existingTable3.setResvNameId3(table3.getResvNameId3());
                }
                if (table3.getClientOId4() != null) {
                    existingTable3.setClientOId4(table3.getClientOId4());
                }
                if (table3.getTypeChb5() != null) {
                    existingTable3.setTypeChb5(table3.getTypeChb5());
                }
                if (table3.getConfirmationNo6() != null) {
                    existingTable3.setConfirmationNo6(table3.getConfirmationNo6());
                }
                if (table3.getClientMdmId7() != null) {
                    existingTable3.setClientMdmId7(table3.getClientMdmId7());
                }
                if (table3.getNameId8() != null) {
                    existingTable3.setNameId8(table3.getNameId8());
                }
                if (table3.getParentResvNameId9() != null) {
                    existingTable3.setParentResvNameId9(table3.getParentResvNameId9());
                }
                if (table3.getContactId10() != null) {
                    existingTable3.setContactId10(table3.getContactId10());
                }
                if (table3.getAgenceId11() != null) {
                    existingTable3.setAgenceId11(table3.getAgenceId11());
                }
                if (table3.getAgenceNom12() != null) {
                    existingTable3.setAgenceNom12(table3.getAgenceNom12());
                }
                if (table3.getSocieteId13() != null) {
                    existingTable3.setSocieteId13(table3.getSocieteId13());
                }
                if (table3.getGroupeId14() != null) {
                    existingTable3.setGroupeId14(table3.getGroupeId14());
                }
                if (table3.getNumBloc15() != null) {
                    existingTable3.setNumBloc15(table3.getNumBloc15());
                }
                if (table3.getTypeResv16() != null) {
                    existingTable3.setTypeResv16(table3.getTypeResv16());
                }
                if (table3.getStatutResv17() != null) {
                    existingTable3.setStatutResv17(table3.getStatutResv17());
                }
                if (table3.getDateDebutResv18() != null) {
                    existingTable3.setDateDebutResv18(table3.getDateDebutResv18());
                }
                if (table3.getDateFinResv19() != null) {
                    existingTable3.setDateFinResv19(table3.getDateFinResv19());
                }
                if (table3.getTruncDateDebutResv20() != null) {
                    existingTable3.setTruncDateDebutResv20(table3.getTruncDateDebutResv20());
                }
                if (table3.getTruncDateFinResv21() != null) {
                    existingTable3.setTruncDateFinResv21(table3.getTruncDateFinResv21());
                }
                if (table3.getDateAnnResv22() != null) {
                    existingTable3.setDateAnnResv22(table3.getDateAnnResv22());
                }
                if (table3.getPseudoRoomYn23() != null) {
                    existingTable3.setPseudoRoomYn23(table3.getPseudoRoomYn23());
                }
                if (table3.getCreateurResv24() != null) {
                    existingTable3.setCreateurResv24(table3.getCreateurResv24());
                }
                if (table3.getNomCreateurResv25() != null) {
                    existingTable3.setNomCreateurResv25(table3.getNomCreateurResv25());
                }
                if (table3.getCodeGarantie26() != null) {
                    existingTable3.setCodeGarantie26(table3.getCodeGarantie26());
                }
                if (table3.getFlgDed27() != null) {
                    existingTable3.setFlgDed27(table3.getFlgDed27());
                }
                if (table3.getCodePays28() != null) {
                    existingTable3.setCodePays28(table3.getCodePays28());
                }
                if (table3.getLibPays29() != null) {
                    existingTable3.setLibPays29(table3.getLibPays29());
                }
                if (table3.getCodeNationalite30() != null) {
                    existingTable3.setCodeNationalite30(table3.getCodeNationalite30());
                }
                if (table3.getLibNationalite31() != null) {
                    existingTable3.setLibNationalite31(table3.getLibNationalite31());
                }
                if (table3.getCodeSource32() != null) {
                    existingTable3.setCodeSource32(table3.getCodeSource32());
                }
                if (table3.getLibSource33() != null) {
                    existingTable3.setLibSource33(table3.getLibSource33());
                }
                if (table3.getCodeGrandSource34() != null) {
                    existingTable3.setCodeGrandSource34(table3.getCodeGrandSource34());
                }
                if (table3.getCodeOrigine35() != null) {
                    existingTable3.setCodeOrigine35(table3.getCodeOrigine35());
                }
                if (table3.getLibOrigine36() != null) {
                    existingTable3.setLibOrigine36(table3.getLibOrigine36());
                }
                if (table3.getCodeMarche37() != null) {
                    existingTable3.setCodeMarche37(table3.getCodeMarche37());
                }
                if (table3.getLibMarche38() != null) {
                    existingTable3.setLibMarche38(table3.getLibMarche38());
                }
                if (table3.getCodeGrandMarche39() != null) {
                    existingTable3.setCodeGrandMarche39(table3.getCodeGrandMarche39());
                }
                if (table3.getLibGrandMarche40() != null) {
                    existingTable3.setLibGrandMarche40(table3.getLibGrandMarche40());
                }
                if (table3.getCodePrix41() != null) {
                    existingTable3.setCodePrix41(table3.getCodePrix41());
                }
                if (table3.getCategPrix42() != null) {
                    existingTable3.setCategPrix42(table3.getCategPrix42());
                }
                if (table3.getLibPrix43() != null) {
                    existingTable3.setLibPrix43(table3.getLibPrix43());
                }
                if (table3.getNumChb44() != null) {
                    existingTable3.setNumChb44(table3.getNumChb44());
                }
                if (table3.getDescriptionTypeChb45() != null) {
                    existingTable3.setDescriptionTypeChb45(table3.getDescriptionTypeChb45());
                }
                if (table3.getCodeTypeChb46() != null) {
                    existingTable3.setCodeTypeChb46(table3.getCodeTypeChb46());
                }
                if (table3.getClassChb47() != null) {
                    existingTable3.setClassChb47(table3.getClassChb47());
                }
                if (table3.getCaractChb48() != null) {
                    existingTable3.setCaractChb48(table3.getCaractChb48());
                }
                if (table3.getTypeChbDeReservation49() != null) {
                    existingTable3.setTypeChbDeReservation49(table3.getTypeChbDeReservation49());
                }
                if (table3.getDescriptionTypeChbDeResv50() != null) {
                    existingTable3.setDescriptionTypeChbDeResv50(table3.getDescriptionTypeChbDeResv50());
                }
                if (table3.getCodeTypeChbDeResv51() != null) {
                    existingTable3.setCodeTypeChbDeResv51(table3.getCodeTypeChbDeResv51());
                }
                if (table3.getStatutDeReservation52() != null) {
                    existingTable3.setStatutDeReservation52(table3.getStatutDeReservation52());
                }
                if (table3.getCircuitDistribution53() != null) {
                    existingTable3.setCircuitDistribution53(table3.getCircuitDistribution53());
                }
                if (table3.getCircuitDistribUserRegroup54() != null) {
                    existingTable3.setCircuitDistribUserRegroup54(table3.getCircuitDistribUserRegroup54());
                }
                if (table3.getNumCrs55() != null) {
                    existingTable3.setNumCrs55(table3.getNumCrs55());
                }
                if (table3.getTypeRefCrs56() != null) {
                    existingTable3.setTypeRefCrs56(table3.getTypeRefCrs56());
                }
                if (table3.getCrsInsertDate57() != null) {
                    existingTable3.setCrsInsertDate57(table3.getCrsInsertDate57());
                }
                if (table3.getDateCreaResv58() != null) {
                    existingTable3.setDateCreaResv58(table3.getDateCreaResv58());
                }
                if (table3.getDatePremier59() != null) {
                    existingTable3.setDatePremier59(table3.getDatePremier59());
                }
                if (table3.getStatutPremier60() != null) {
                    existingTable3.setStatutPremier60(table3.getStatutPremier60());
                }
                if (table3.getDateDernier61() != null) {
                    existingTable3.setDateDernier61(table3.getDateDernier61());
                }
                if (table3.getStatutDernier62() != null) {
                    existingTable3.setStatutDernier62(table3.getStatutDernier62());
                }
                if (table3.getDateDernierPseudo63() != null) {
                    existingTable3.setDateDernierPseudo63(table3.getDateDernierPseudo63());
                }
                if (table3.getStatutDernierPseudo64() != null) {
                    existingTable3.setStatutDernierPseudo64(table3.getStatutDernierPseudo64());
                }
                if (table3.getDiffDtCreaAnn65() != null) {
                    existingTable3.setDiffDtCreaAnn65(table3.getDiffDtCreaAnn65());
                }
                if (table3.getDiffDtArrAnn66() != null) {
                    existingTable3.setDiffDtArrAnn66(table3.getDiffDtArrAnn66());
                }
                if (table3.getLeadtime67() != null) {
                    existingTable3.setLeadtime67(table3.getLeadtime67());
                }
                if (table3.getLos68() != null) {
                    existingTable3.setLos68(table3.getLos68());
                }
                if (table3.getOccupantsGroupe69() != null) {
                    existingTable3.setOccupantsGroupe69(table3.getOccupantsGroupe69());
                }
                if (table3.getNbNuitee70() != null) {
                    existingTable3.setNbNuitee70(table3.getNbNuitee70());
                }
                if (table3.getNbNuiteeNnDed71() != null) {
                    existingTable3.setNbNuiteeNnDed71(table3.getNbNuiteeNnDed71());
                }
                if (table3.getNbResvAnn72() != null) {
                    existingTable3.setNbResvAnn72(table3.getNbResvAnn72());
                }
                if (table3.getNbAdu73() != null) {
                    existingTable3.setNbAdu73(table3.getNbAdu73());
                }
                if (table3.getNbEnf74() != null) {
                    existingTable3.setNbEnf74(table3.getNbEnf74());
                }
                if (table3.getNbPersDayU75() != null) {
                    existingTable3.setNbPersDayU75(table3.getNbPersDayU75());
                }
                if (table3.getNbPersArr76() != null) {
                    existingTable3.setNbPersArr76(table3.getNbPersArr76());
                }
                if (table3.getNbPersDep77() != null) {
                    existingTable3.setNbPersDep77(table3.getNbPersDep77());
                }
                if (table3.getNbPersAnn78() != null) {
                    existingTable3.setNbPersAnn78(table3.getNbPersAnn78());
                }
                if (table3.getNbPersNoshow79() != null) {
                    existingTable3.setNbPersNoshow79(table3.getNbPersNoshow79());
                }
                if (table3.getNbChbDayU80() != null) {
                    existingTable3.setNbChbDayU80(table3.getNbChbDayU80());
                }
                if (table3.getNbChbArr81() != null) {
                    existingTable3.setNbChbArr81(table3.getNbChbArr81());
                }
                if (table3.getNbChbDep82() != null) {
                    existingTable3.setNbChbDep82(table3.getNbChbDep82());
                }
                if (table3.getNbChbAnn83() != null) {
                    existingTable3.setNbChbAnn83(table3.getNbChbAnn83());
                }
                if (table3.getNbChbNoshow84() != null) {
                    existingTable3.setNbChbNoshow84(table3.getNbChbNoshow84());
                }
                if (table3.getRevenuNetChambre85() != null) {
                    existingTable3.setRevenuNetChambre85(table3.getRevenuNetChambre85());
                }
                if (table3.getRevenuTaxeChambre86() != null) {
                    existingTable3.setRevenuTaxeChambre86(table3.getRevenuTaxeChambre86());
                }
                if (table3.getRevenuNetChambreGlobal87() != null) {
                    existingTable3.setRevenuNetChambreGlobal87(table3.getRevenuNetChambreGlobal87());
                }
                if (table3.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable3.setRevenuTaxeChambreGlobal88(table3.getRevenuTaxeChambreGlobal88());
                }
                if (table3.getRevenuNetBq89() != null) {
                    existingTable3.setRevenuNetBq89(table3.getRevenuNetBq89());
                }
                if (table3.getRevenuTaxeBq90() != null) {
                    existingTable3.setRevenuTaxeBq90(table3.getRevenuTaxeBq90());
                }
                if (table3.getRevenuNetBqGlobal91() != null) {
                    existingTable3.setRevenuNetBqGlobal91(table3.getRevenuNetBqGlobal91());
                }
                if (table3.getRevenuTaxeBqGlobal92() != null) {
                    existingTable3.setRevenuTaxeBqGlobal92(table3.getRevenuTaxeBqGlobal92());
                }
                if (table3.getRevenuNetExtra93() != null) {
                    existingTable3.setRevenuNetExtra93(table3.getRevenuNetExtra93());
                }
                if (table3.getRevenuTaxeExtra94() != null) {
                    existingTable3.setRevenuTaxeExtra94(table3.getRevenuTaxeExtra94());
                }
                if (table3.getRevenuNetExtraGlobal95() != null) {
                    existingTable3.setRevenuNetExtraGlobal95(table3.getRevenuNetExtraGlobal95());
                }
                if (table3.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable3.setRevenuTaxeExtraGlobal96(table3.getRevenuTaxeExtraGlobal96());
                }
                if (table3.getRevenuNetTotal97() != null) {
                    existingTable3.setRevenuNetTotal97(table3.getRevenuNetTotal97());
                }
                if (table3.getRevenuTaxeTotal98() != null) {
                    existingTable3.setRevenuTaxeTotal98(table3.getRevenuTaxeTotal98());
                }
                if (table3.getRevenuNetTotalGlobal99() != null) {
                    existingTable3.setRevenuNetTotalGlobal99(table3.getRevenuNetTotalGlobal99());
                }
                if (table3.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable3.setRevenuTaxeTotalGlobal100(table3.getRevenuTaxeTotalGlobal100());
                }
                if (table3.getProdRevenuChambre101() != null) {
                    existingTable3.setProdRevenuChambre101(table3.getProdRevenuChambre101());
                }
                if (table3.getProdRevenuBq102() != null) {
                    existingTable3.setProdRevenuBq102(table3.getProdRevenuBq102());
                }
                if (table3.getProdRevenuExtra103() != null) {
                    existingTable3.setProdRevenuExtra103(table3.getProdRevenuExtra103());
                }
                if (table3.getProdRevenuTotal104() != null) {
                    existingTable3.setProdRevenuTotal104(table3.getProdRevenuTotal104());
                }
                if (table3.getProdChambreNbNuitees105() != null) {
                    existingTable3.setProdChambreNbNuitees105(table3.getProdChambreNbNuitees105());
                }
                if (table3.getTechCreateDate106() != null) {
                    existingTable3.setTechCreateDate106(table3.getTechCreateDate106());
                }
                if (table3.getTechUpdateDate107() != null) {
                    existingTable3.setTechUpdateDate107(table3.getTechUpdateDate107());
                }
                if (table3.getNumLigne108() != null) {
                    existingTable3.setNumLigne108(table3.getNumLigne108());
                }
                if (table3.getResort109() != null) {
                    existingTable3.setResort109(table3.getResort109());
                }
                if (table3.getResvNameId110() != null) {
                    existingTable3.setResvNameId110(table3.getResvNameId110());
                }
                if (table3.getClientOId111() != null) {
                    existingTable3.setClientOId111(table3.getClientOId111());
                }
                if (table3.getTypeChb112() != null) {
                    existingTable3.setTypeChb112(table3.getTypeChb112());
                }
                if (table3.getConfirmationNo113() != null) {
                    existingTable3.setConfirmationNo113(table3.getConfirmationNo113());
                }
                if (table3.getClientMdmId114() != null) {
                    existingTable3.setClientMdmId114(table3.getClientMdmId114());
                }
                if (table3.getNameId115() != null) {
                    existingTable3.setNameId115(table3.getNameId115());
                }
                if (table3.getParentResvNameId116() != null) {
                    existingTable3.setParentResvNameId116(table3.getParentResvNameId116());
                }
                if (table3.getContactId117() != null) {
                    existingTable3.setContactId117(table3.getContactId117());
                }
                if (table3.getAgenceId118() != null) {
                    existingTable3.setAgenceId118(table3.getAgenceId118());
                }
                if (table3.getAgenceNom119() != null) {
                    existingTable3.setAgenceNom119(table3.getAgenceNom119());
                }
                if (table3.getSocieteId120() != null) {
                    existingTable3.setSocieteId120(table3.getSocieteId120());
                }
                if (table3.getGroupeId121() != null) {
                    existingTable3.setGroupeId121(table3.getGroupeId121());
                }
                if (table3.getNumBloc122() != null) {
                    existingTable3.setNumBloc122(table3.getNumBloc122());
                }
                if (table3.getTypeResv123() != null) {
                    existingTable3.setTypeResv123(table3.getTypeResv123());
                }
                if (table3.getStatutResv124() != null) {
                    existingTable3.setStatutResv124(table3.getStatutResv124());
                }
                if (table3.getDateDebutResv125() != null) {
                    existingTable3.setDateDebutResv125(table3.getDateDebutResv125());
                }
                if (table3.getDateFinResv126() != null) {
                    existingTable3.setDateFinResv126(table3.getDateFinResv126());
                }
                if (table3.getTruncDateDebutResv127() != null) {
                    existingTable3.setTruncDateDebutResv127(table3.getTruncDateDebutResv127());
                }
                if (table3.getTruncDateFinResv128() != null) {
                    existingTable3.setTruncDateFinResv128(table3.getTruncDateFinResv128());
                }
                if (table3.getDateAnnResv129() != null) {
                    existingTable3.setDateAnnResv129(table3.getDateAnnResv129());
                }
                if (table3.getPseudoRoomYn130() != null) {
                    existingTable3.setPseudoRoomYn130(table3.getPseudoRoomYn130());
                }
                if (table3.getCreateurResv131() != null) {
                    existingTable3.setCreateurResv131(table3.getCreateurResv131());
                }
                if (table3.getNomCreateurResv132() != null) {
                    existingTable3.setNomCreateurResv132(table3.getNomCreateurResv132());
                }
                if (table3.getCodeGarantie133() != null) {
                    existingTable3.setCodeGarantie133(table3.getCodeGarantie133());
                }
                if (table3.getFlgDed134() != null) {
                    existingTable3.setFlgDed134(table3.getFlgDed134());
                }
                if (table3.getCodePays135() != null) {
                    existingTable3.setCodePays135(table3.getCodePays135());
                }
                if (table3.getLibPays136() != null) {
                    existingTable3.setLibPays136(table3.getLibPays136());
                }
                if (table3.getCodeNationalite137() != null) {
                    existingTable3.setCodeNationalite137(table3.getCodeNationalite137());
                }
                if (table3.getLibNationalite138() != null) {
                    existingTable3.setLibNationalite138(table3.getLibNationalite138());
                }
                if (table3.getCodeSource139() != null) {
                    existingTable3.setCodeSource139(table3.getCodeSource139());
                }
                if (table3.getLibSource140() != null) {
                    existingTable3.setLibSource140(table3.getLibSource140());
                }
                if (table3.getCodeGrandSource141() != null) {
                    existingTable3.setCodeGrandSource141(table3.getCodeGrandSource141());
                }
                if (table3.getCodeOrigine142() != null) {
                    existingTable3.setCodeOrigine142(table3.getCodeOrigine142());
                }
                if (table3.getLibOrigine143() != null) {
                    existingTable3.setLibOrigine143(table3.getLibOrigine143());
                }
                if (table3.getCodeMarche144() != null) {
                    existingTable3.setCodeMarche144(table3.getCodeMarche144());
                }
                if (table3.getLibMarche145() != null) {
                    existingTable3.setLibMarche145(table3.getLibMarche145());
                }
                if (table3.getCodeGrandMarche146() != null) {
                    existingTable3.setCodeGrandMarche146(table3.getCodeGrandMarche146());
                }
                if (table3.getLibGrandMarche147() != null) {
                    existingTable3.setLibGrandMarche147(table3.getLibGrandMarche147());
                }
                if (table3.getCodePrix148() != null) {
                    existingTable3.setCodePrix148(table3.getCodePrix148());
                }
                if (table3.getCategPrix149() != null) {
                    existingTable3.setCategPrix149(table3.getCategPrix149());
                }
                if (table3.getLibPrix150() != null) {
                    existingTable3.setLibPrix150(table3.getLibPrix150());
                }
                if (table3.getNumChb151() != null) {
                    existingTable3.setNumChb151(table3.getNumChb151());
                }
                if (table3.getDescriptionTypeChb152() != null) {
                    existingTable3.setDescriptionTypeChb152(table3.getDescriptionTypeChb152());
                }
                if (table3.getCodeTypeChb153() != null) {
                    existingTable3.setCodeTypeChb153(table3.getCodeTypeChb153());
                }
                if (table3.getClassChb154() != null) {
                    existingTable3.setClassChb154(table3.getClassChb154());
                }
                if (table3.getCaractChb155() != null) {
                    existingTable3.setCaractChb155(table3.getCaractChb155());
                }
                if (table3.getTypeChbDeReservation156() != null) {
                    existingTable3.setTypeChbDeReservation156(table3.getTypeChbDeReservation156());
                }
                if (table3.getDescriptionTypeChbDeResv157() != null) {
                    existingTable3.setDescriptionTypeChbDeResv157(table3.getDescriptionTypeChbDeResv157());
                }
                if (table3.getCodeTypeChbDeResv158() != null) {
                    existingTable3.setCodeTypeChbDeResv158(table3.getCodeTypeChbDeResv158());
                }
                if (table3.getStatutDeReservation159() != null) {
                    existingTable3.setStatutDeReservation159(table3.getStatutDeReservation159());
                }
                if (table3.getCircuitDistribution160() != null) {
                    existingTable3.setCircuitDistribution160(table3.getCircuitDistribution160());
                }
                if (table3.getCircuitDistribUserRegroup161() != null) {
                    existingTable3.setCircuitDistribUserRegroup161(table3.getCircuitDistribUserRegroup161());
                }
                if (table3.getNumCrs162() != null) {
                    existingTable3.setNumCrs162(table3.getNumCrs162());
                }
                if (table3.getTypeRefCrs163() != null) {
                    existingTable3.setTypeRefCrs163(table3.getTypeRefCrs163());
                }
                if (table3.getCrsInsertDate164() != null) {
                    existingTable3.setCrsInsertDate164(table3.getCrsInsertDate164());
                }
                if (table3.getDateCreaResv165() != null) {
                    existingTable3.setDateCreaResv165(table3.getDateCreaResv165());
                }
                if (table3.getDatePremier166() != null) {
                    existingTable3.setDatePremier166(table3.getDatePremier166());
                }
                if (table3.getStatutPremier167() != null) {
                    existingTable3.setStatutPremier167(table3.getStatutPremier167());
                }
                if (table3.getDateDernier168() != null) {
                    existingTable3.setDateDernier168(table3.getDateDernier168());
                }
                if (table3.getStatutDernier169() != null) {
                    existingTable3.setStatutDernier169(table3.getStatutDernier169());
                }
                if (table3.getDateDernierPseudo170() != null) {
                    existingTable3.setDateDernierPseudo170(table3.getDateDernierPseudo170());
                }
                if (table3.getStatutDernierPseudo171() != null) {
                    existingTable3.setStatutDernierPseudo171(table3.getStatutDernierPseudo171());
                }
                if (table3.getDiffDtCreaAnn172() != null) {
                    existingTable3.setDiffDtCreaAnn172(table3.getDiffDtCreaAnn172());
                }
                if (table3.getDiffDtArrAnn173() != null) {
                    existingTable3.setDiffDtArrAnn173(table3.getDiffDtArrAnn173());
                }
                if (table3.getLeadtime174() != null) {
                    existingTable3.setLeadtime174(table3.getLeadtime174());
                }
                if (table3.getLos175() != null) {
                    existingTable3.setLos175(table3.getLos175());
                }
                if (table3.getOccupantsGroupe176() != null) {
                    existingTable3.setOccupantsGroupe176(table3.getOccupantsGroupe176());
                }
                if (table3.getNbNuitee177() != null) {
                    existingTable3.setNbNuitee177(table3.getNbNuitee177());
                }
                if (table3.getNbNuiteeNnDed178() != null) {
                    existingTable3.setNbNuiteeNnDed178(table3.getNbNuiteeNnDed178());
                }
                if (table3.getNbResvAnn179() != null) {
                    existingTable3.setNbResvAnn179(table3.getNbResvAnn179());
                }
                if (table3.getNbAdu180() != null) {
                    existingTable3.setNbAdu180(table3.getNbAdu180());
                }
                if (table3.getNbEnf181() != null) {
                    existingTable3.setNbEnf181(table3.getNbEnf181());
                }
                if (table3.getNbPersDayU182() != null) {
                    existingTable3.setNbPersDayU182(table3.getNbPersDayU182());
                }
                if (table3.getNbPersArr183() != null) {
                    existingTable3.setNbPersArr183(table3.getNbPersArr183());
                }
                if (table3.getNbPersDep184() != null) {
                    existingTable3.setNbPersDep184(table3.getNbPersDep184());
                }
                if (table3.getNbPersAnn185() != null) {
                    existingTable3.setNbPersAnn185(table3.getNbPersAnn185());
                }
                if (table3.getNbPersNoshow186() != null) {
                    existingTable3.setNbPersNoshow186(table3.getNbPersNoshow186());
                }
                if (table3.getNbChbDayU187() != null) {
                    existingTable3.setNbChbDayU187(table3.getNbChbDayU187());
                }
                if (table3.getNbChbArr188() != null) {
                    existingTable3.setNbChbArr188(table3.getNbChbArr188());
                }
                if (table3.getNbChbDep189() != null) {
                    existingTable3.setNbChbDep189(table3.getNbChbDep189());
                }
                if (table3.getNbChbAnn190() != null) {
                    existingTable3.setNbChbAnn190(table3.getNbChbAnn190());
                }
                if (table3.getNbChbNoshow191() != null) {
                    existingTable3.setNbChbNoshow191(table3.getNbChbNoshow191());
                }
                if (table3.getRevenuNetChambre192() != null) {
                    existingTable3.setRevenuNetChambre192(table3.getRevenuNetChambre192());
                }
                if (table3.getRevenuTaxeChambre193() != null) {
                    existingTable3.setRevenuTaxeChambre193(table3.getRevenuTaxeChambre193());
                }
                if (table3.getRevenuNetChambreGlobal194() != null) {
                    existingTable3.setRevenuNetChambreGlobal194(table3.getRevenuNetChambreGlobal194());
                }
                if (table3.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable3.setRevenuTaxeChambreGlobal195(table3.getRevenuTaxeChambreGlobal195());
                }
                if (table3.getRevenuNetBq196() != null) {
                    existingTable3.setRevenuNetBq196(table3.getRevenuNetBq196());
                }
                if (table3.getRevenuTaxeBq197() != null) {
                    existingTable3.setRevenuTaxeBq197(table3.getRevenuTaxeBq197());
                }
                if (table3.getRevenuNetBqGlobal198() != null) {
                    existingTable3.setRevenuNetBqGlobal198(table3.getRevenuNetBqGlobal198());
                }
                if (table3.getRevenuTaxeBqGlobal199() != null) {
                    existingTable3.setRevenuTaxeBqGlobal199(table3.getRevenuTaxeBqGlobal199());
                }
                if (table3.getRevenuNetExtra200() != null) {
                    existingTable3.setRevenuNetExtra200(table3.getRevenuNetExtra200());
                }
                if (table3.getRevenuTaxeExtra201() != null) {
                    existingTable3.setRevenuTaxeExtra201(table3.getRevenuTaxeExtra201());
                }
                if (table3.getRevenuNetExtraGlobal202() != null) {
                    existingTable3.setRevenuNetExtraGlobal202(table3.getRevenuNetExtraGlobal202());
                }
                if (table3.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable3.setRevenuTaxeExtraGlobal203(table3.getRevenuTaxeExtraGlobal203());
                }
                if (table3.getRevenuNetTotal204() != null) {
                    existingTable3.setRevenuNetTotal204(table3.getRevenuNetTotal204());
                }
                if (table3.getRevenuTaxeTotal205() != null) {
                    existingTable3.setRevenuTaxeTotal205(table3.getRevenuTaxeTotal205());
                }
                if (table3.getRevenuNetTotalGlobal206() != null) {
                    existingTable3.setRevenuNetTotalGlobal206(table3.getRevenuNetTotalGlobal206());
                }
                if (table3.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable3.setRevenuTaxeTotalGlobal207(table3.getRevenuTaxeTotalGlobal207());
                }
                if (table3.getProdRevenuChambre208() != null) {
                    existingTable3.setProdRevenuChambre208(table3.getProdRevenuChambre208());
                }
                if (table3.getProdRevenuBq209() != null) {
                    existingTable3.setProdRevenuBq209(table3.getProdRevenuBq209());
                }
                if (table3.getProdRevenuExtra210() != null) {
                    existingTable3.setProdRevenuExtra210(table3.getProdRevenuExtra210());
                }
                if (table3.getProdRevenuTotal211() != null) {
                    existingTable3.setProdRevenuTotal211(table3.getProdRevenuTotal211());
                }
                if (table3.getProdChambreNbNuitees212() != null) {
                    existingTable3.setProdChambreNbNuitees212(table3.getProdChambreNbNuitees212());
                }
                if (table3.getTechCreateDate213() != null) {
                    existingTable3.setTechCreateDate213(table3.getTechCreateDate213());
                }
                if (table3.getTechUpdateDate214() != null) {
                    existingTable3.setTechUpdateDate214(table3.getTechUpdateDate214());
                }
                if (table3.getNumLigne215() != null) {
                    existingTable3.setNumLigne215(table3.getNumLigne215());
                }
                if (table3.getResort216() != null) {
                    existingTable3.setResort216(table3.getResort216());
                }
                if (table3.getResvNameId217() != null) {
                    existingTable3.setResvNameId217(table3.getResvNameId217());
                }
                if (table3.getClientOId218() != null) {
                    existingTable3.setClientOId218(table3.getClientOId218());
                }
                if (table3.getTypeChb219() != null) {
                    existingTable3.setTypeChb219(table3.getTypeChb219());
                }
                if (table3.getConfirmationNo220() != null) {
                    existingTable3.setConfirmationNo220(table3.getConfirmationNo220());
                }
                if (table3.getClientMdmId221() != null) {
                    existingTable3.setClientMdmId221(table3.getClientMdmId221());
                }
                if (table3.getNameId222() != null) {
                    existingTable3.setNameId222(table3.getNameId222());
                }
                if (table3.getParentResvNameId223() != null) {
                    existingTable3.setParentResvNameId223(table3.getParentResvNameId223());
                }
                if (table3.getContactId224() != null) {
                    existingTable3.setContactId224(table3.getContactId224());
                }
                if (table3.getAgenceId225() != null) {
                    existingTable3.setAgenceId225(table3.getAgenceId225());
                }
                if (table3.getAgenceNom226() != null) {
                    existingTable3.setAgenceNom226(table3.getAgenceNom226());
                }
                if (table3.getSocieteId227() != null) {
                    existingTable3.setSocieteId227(table3.getSocieteId227());
                }
                if (table3.getGroupeId228() != null) {
                    existingTable3.setGroupeId228(table3.getGroupeId228());
                }
                if (table3.getNumBloc229() != null) {
                    existingTable3.setNumBloc229(table3.getNumBloc229());
                }
                if (table3.getTypeResv230() != null) {
                    existingTable3.setTypeResv230(table3.getTypeResv230());
                }
                if (table3.getStatutResv231() != null) {
                    existingTable3.setStatutResv231(table3.getStatutResv231());
                }
                if (table3.getDateDebutResv232() != null) {
                    existingTable3.setDateDebutResv232(table3.getDateDebutResv232());
                }
                if (table3.getDateFinResv233() != null) {
                    existingTable3.setDateFinResv233(table3.getDateFinResv233());
                }
                if (table3.getTruncDateDebutResv234() != null) {
                    existingTable3.setTruncDateDebutResv234(table3.getTruncDateDebutResv234());
                }
                if (table3.getTruncDateFinResv235() != null) {
                    existingTable3.setTruncDateFinResv235(table3.getTruncDateFinResv235());
                }
                if (table3.getDateAnnResv236() != null) {
                    existingTable3.setDateAnnResv236(table3.getDateAnnResv236());
                }
                if (table3.getPseudoRoomYn237() != null) {
                    existingTable3.setPseudoRoomYn237(table3.getPseudoRoomYn237());
                }
                if (table3.getCreateurResv238() != null) {
                    existingTable3.setCreateurResv238(table3.getCreateurResv238());
                }
                if (table3.getNomCreateurResv239() != null) {
                    existingTable3.setNomCreateurResv239(table3.getNomCreateurResv239());
                }
                if (table3.getCodeGarantie240() != null) {
                    existingTable3.setCodeGarantie240(table3.getCodeGarantie240());
                }
                if (table3.getFlgDed241() != null) {
                    existingTable3.setFlgDed241(table3.getFlgDed241());
                }
                if (table3.getCodePays242() != null) {
                    existingTable3.setCodePays242(table3.getCodePays242());
                }
                if (table3.getLibPays243() != null) {
                    existingTable3.setLibPays243(table3.getLibPays243());
                }
                if (table3.getCodeNationalite244() != null) {
                    existingTable3.setCodeNationalite244(table3.getCodeNationalite244());
                }
                if (table3.getLibNationalite245() != null) {
                    existingTable3.setLibNationalite245(table3.getLibNationalite245());
                }
                if (table3.getCodeSource246() != null) {
                    existingTable3.setCodeSource246(table3.getCodeSource246());
                }
                if (table3.getLibSource247() != null) {
                    existingTable3.setLibSource247(table3.getLibSource247());
                }
                if (table3.getCodeGrandSource248() != null) {
                    existingTable3.setCodeGrandSource248(table3.getCodeGrandSource248());
                }
                if (table3.getCodeOrigine249() != null) {
                    existingTable3.setCodeOrigine249(table3.getCodeOrigine249());
                }
                if (table3.getLibOrigine250() != null) {
                    existingTable3.setLibOrigine250(table3.getLibOrigine250());
                }
                if (table3.getCodeMarche251() != null) {
                    existingTable3.setCodeMarche251(table3.getCodeMarche251());
                }
                if (table3.getLibMarche252() != null) {
                    existingTable3.setLibMarche252(table3.getLibMarche252());
                }
                if (table3.getCodeGrandMarche253() != null) {
                    existingTable3.setCodeGrandMarche253(table3.getCodeGrandMarche253());
                }
                if (table3.getLibGrandMarche254() != null) {
                    existingTable3.setLibGrandMarche254(table3.getLibGrandMarche254());
                }
                if (table3.getCodePrix255() != null) {
                    existingTable3.setCodePrix255(table3.getCodePrix255());
                }
                if (table3.getCategPrix256() != null) {
                    existingTable3.setCategPrix256(table3.getCategPrix256());
                }
                if (table3.getLibPrix257() != null) {
                    existingTable3.setLibPrix257(table3.getLibPrix257());
                }
                if (table3.getNumChb258() != null) {
                    existingTable3.setNumChb258(table3.getNumChb258());
                }
                if (table3.getDescriptionTypeChb259() != null) {
                    existingTable3.setDescriptionTypeChb259(table3.getDescriptionTypeChb259());
                }
                if (table3.getCodeTypeChb260() != null) {
                    existingTable3.setCodeTypeChb260(table3.getCodeTypeChb260());
                }
                if (table3.getClassChb261() != null) {
                    existingTable3.setClassChb261(table3.getClassChb261());
                }
                if (table3.getCaractChb262() != null) {
                    existingTable3.setCaractChb262(table3.getCaractChb262());
                }
                if (table3.getTypeChbDeReservation263() != null) {
                    existingTable3.setTypeChbDeReservation263(table3.getTypeChbDeReservation263());
                }
                if (table3.getDescriptionTypeChbDeResv264() != null) {
                    existingTable3.setDescriptionTypeChbDeResv264(table3.getDescriptionTypeChbDeResv264());
                }
                if (table3.getCodeTypeChbDeResv265() != null) {
                    existingTable3.setCodeTypeChbDeResv265(table3.getCodeTypeChbDeResv265());
                }
                if (table3.getStatutDeReservation266() != null) {
                    existingTable3.setStatutDeReservation266(table3.getStatutDeReservation266());
                }
                if (table3.getCircuitDistribution267() != null) {
                    existingTable3.setCircuitDistribution267(table3.getCircuitDistribution267());
                }
                if (table3.getCircuitDistribUserRegroup268() != null) {
                    existingTable3.setCircuitDistribUserRegroup268(table3.getCircuitDistribUserRegroup268());
                }
                if (table3.getNumCrs269() != null) {
                    existingTable3.setNumCrs269(table3.getNumCrs269());
                }
                if (table3.getTypeRefCrs270() != null) {
                    existingTable3.setTypeRefCrs270(table3.getTypeRefCrs270());
                }
                if (table3.getCrsInsertDate271() != null) {
                    existingTable3.setCrsInsertDate271(table3.getCrsInsertDate271());
                }
                if (table3.getDateCreaResv272() != null) {
                    existingTable3.setDateCreaResv272(table3.getDateCreaResv272());
                }
                if (table3.getDatePremier273() != null) {
                    existingTable3.setDatePremier273(table3.getDatePremier273());
                }
                if (table3.getStatutPremier274() != null) {
                    existingTable3.setStatutPremier274(table3.getStatutPremier274());
                }
                if (table3.getDateDernier275() != null) {
                    existingTable3.setDateDernier275(table3.getDateDernier275());
                }
                if (table3.getStatutDernier276() != null) {
                    existingTable3.setStatutDernier276(table3.getStatutDernier276());
                }
                if (table3.getDateDernierPseudo277() != null) {
                    existingTable3.setDateDernierPseudo277(table3.getDateDernierPseudo277());
                }
                if (table3.getStatutDernierPseudo278() != null) {
                    existingTable3.setStatutDernierPseudo278(table3.getStatutDernierPseudo278());
                }
                if (table3.getDiffDtCreaAnn279() != null) {
                    existingTable3.setDiffDtCreaAnn279(table3.getDiffDtCreaAnn279());
                }
                if (table3.getDiffDtArrAnn280() != null) {
                    existingTable3.setDiffDtArrAnn280(table3.getDiffDtArrAnn280());
                }
                if (table3.getLeadtime281() != null) {
                    existingTable3.setLeadtime281(table3.getLeadtime281());
                }
                if (table3.getLos282() != null) {
                    existingTable3.setLos282(table3.getLos282());
                }
                if (table3.getOccupantsGroupe283() != null) {
                    existingTable3.setOccupantsGroupe283(table3.getOccupantsGroupe283());
                }
                if (table3.getNbNuitee284() != null) {
                    existingTable3.setNbNuitee284(table3.getNbNuitee284());
                }
                if (table3.getNbNuiteeNnDed285() != null) {
                    existingTable3.setNbNuiteeNnDed285(table3.getNbNuiteeNnDed285());
                }
                if (table3.getNbResvAnn286() != null) {
                    existingTable3.setNbResvAnn286(table3.getNbResvAnn286());
                }
                if (table3.getNbAdu287() != null) {
                    existingTable3.setNbAdu287(table3.getNbAdu287());
                }
                if (table3.getNbEnf288() != null) {
                    existingTable3.setNbEnf288(table3.getNbEnf288());
                }
                if (table3.getNbPersDayU289() != null) {
                    existingTable3.setNbPersDayU289(table3.getNbPersDayU289());
                }
                if (table3.getNbPersArr290() != null) {
                    existingTable3.setNbPersArr290(table3.getNbPersArr290());
                }
                if (table3.getNbPersDep291() != null) {
                    existingTable3.setNbPersDep291(table3.getNbPersDep291());
                }
                if (table3.getNbPersAnn292() != null) {
                    existingTable3.setNbPersAnn292(table3.getNbPersAnn292());
                }
                if (table3.getNbPersNoshow293() != null) {
                    existingTable3.setNbPersNoshow293(table3.getNbPersNoshow293());
                }
                if (table3.getNbChbDayU294() != null) {
                    existingTable3.setNbChbDayU294(table3.getNbChbDayU294());
                }
                if (table3.getNbChbArr295() != null) {
                    existingTable3.setNbChbArr295(table3.getNbChbArr295());
                }
                if (table3.getNbChbDep296() != null) {
                    existingTable3.setNbChbDep296(table3.getNbChbDep296());
                }
                if (table3.getNbChbAnn297() != null) {
                    existingTable3.setNbChbAnn297(table3.getNbChbAnn297());
                }
                if (table3.getNbChbNoshow298() != null) {
                    existingTable3.setNbChbNoshow298(table3.getNbChbNoshow298());
                }
                if (table3.getRevenuNetChambre299() != null) {
                    existingTable3.setRevenuNetChambre299(table3.getRevenuNetChambre299());
                }
                if (table3.getRevenuTaxeChambre300() != null) {
                    existingTable3.setRevenuTaxeChambre300(table3.getRevenuTaxeChambre300());
                }
                if (table3.getRevenuNetChambreGlobal301() != null) {
                    existingTable3.setRevenuNetChambreGlobal301(table3.getRevenuNetChambreGlobal301());
                }
                if (table3.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable3.setRevenuTaxeChambreGlobal302(table3.getRevenuTaxeChambreGlobal302());
                }
                if (table3.getRevenuNetBq303() != null) {
                    existingTable3.setRevenuNetBq303(table3.getRevenuNetBq303());
                }
                if (table3.getRevenuTaxeBq304() != null) {
                    existingTable3.setRevenuTaxeBq304(table3.getRevenuTaxeBq304());
                }
                if (table3.getRevenuNetBqGlobal305() != null) {
                    existingTable3.setRevenuNetBqGlobal305(table3.getRevenuNetBqGlobal305());
                }
                if (table3.getRevenuTaxeBqGlobal306() != null) {
                    existingTable3.setRevenuTaxeBqGlobal306(table3.getRevenuTaxeBqGlobal306());
                }
                if (table3.getRevenuNetExtra307() != null) {
                    existingTable3.setRevenuNetExtra307(table3.getRevenuNetExtra307());
                }
                if (table3.getRevenuTaxeExtra308() != null) {
                    existingTable3.setRevenuTaxeExtra308(table3.getRevenuTaxeExtra308());
                }
                if (table3.getRevenuNetExtraGlobal309() != null) {
                    existingTable3.setRevenuNetExtraGlobal309(table3.getRevenuNetExtraGlobal309());
                }
                if (table3.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable3.setRevenuTaxeExtraGlobal310(table3.getRevenuTaxeExtraGlobal310());
                }

                return existingTable3;
            })
            .map(table3Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table3.getId().toString())
        );
    }

    /**
     * {@code GET  /table-3-s} : get all the table3s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table3s in body.
     */
    @GetMapping("")
    public List<Table3> getAllTable3s() {
        log.debug("REST request to get all Table3s");
        return table3Repository.findAll();
    }

    /**
     * {@code GET  /table-3-s/:id} : get the "id" table3.
     *
     * @param id the id of the table3 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table3, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table3> getTable3(@PathVariable("id") Long id) {
        log.debug("REST request to get Table3 : {}", id);
        Optional<Table3> table3 = table3Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table3);
    }

    /**
     * {@code DELETE  /table-3-s/:id} : delete the "id" table3.
     *
     * @param id the id of the table3 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable3(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table3 : {}", id);
        table3Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
