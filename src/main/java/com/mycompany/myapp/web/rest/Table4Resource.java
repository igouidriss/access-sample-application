package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table4;
import com.mycompany.myapp.repository.Table4Repository;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.Table4}.
 */
@RestController
@RequestMapping("/api/table-4-s")
@Transactional
public class Table4Resource {

    private final Logger log = LoggerFactory.getLogger(Table4Resource.class);

    private static final String ENTITY_NAME = "accessSampleApplicationTable4";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table4Repository table4Repository;

    public Table4Resource(Table4Repository table4Repository) {
        this.table4Repository = table4Repository;
    }

    /**
     * {@code POST  /table-4-s} : Create a new table4.
     *
     * @param table4 the table4 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table4, or with status {@code 400 (Bad Request)} if the table4 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table4> createTable4(@RequestBody Table4 table4) throws URISyntaxException {
        log.debug("REST request to save Table4 : {}", table4);
        if (table4.getId() != null) {
            throw new BadRequestAlertException("A new table4 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table4 = table4Repository.save(table4);
        return ResponseEntity.created(new URI("/api/table-4-s/" + table4.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table4.getId().toString()))
            .body(table4);
    }

    /**
     * {@code PUT  /table-4-s/:id} : Updates an existing table4.
     *
     * @param id the id of the table4 to save.
     * @param table4 the table4 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table4,
     * or with status {@code 400 (Bad Request)} if the table4 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table4 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table4> updateTable4(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table4 table4)
        throws URISyntaxException {
        log.debug("REST request to update Table4 : {}, {}", id, table4);
        if (table4.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table4.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table4Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table4 = table4Repository.save(table4);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table4.getId().toString()))
            .body(table4);
    }

    /**
     * {@code PATCH  /table-4-s/:id} : Partial updates given fields of an existing table4, field will ignore if it is null
     *
     * @param id the id of the table4 to save.
     * @param table4 the table4 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table4,
     * or with status {@code 400 (Bad Request)} if the table4 is not valid,
     * or with status {@code 404 (Not Found)} if the table4 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table4 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table4> partialUpdateTable4(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table4 table4
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table4 partially : {}, {}", id, table4);
        if (table4.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table4.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table4Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table4> result = table4Repository
            .findById(table4.getId())
            .map(existingTable4 -> {
                if (table4.getNumLigne1() != null) {
                    existingTable4.setNumLigne1(table4.getNumLigne1());
                }
                if (table4.getResort2() != null) {
                    existingTable4.setResort2(table4.getResort2());
                }
                if (table4.getResvNameId3() != null) {
                    existingTable4.setResvNameId3(table4.getResvNameId3());
                }
                if (table4.getClientOId4() != null) {
                    existingTable4.setClientOId4(table4.getClientOId4());
                }
                if (table4.getTypeChb5() != null) {
                    existingTable4.setTypeChb5(table4.getTypeChb5());
                }
                if (table4.getConfirmationNo6() != null) {
                    existingTable4.setConfirmationNo6(table4.getConfirmationNo6());
                }
                if (table4.getClientMdmId7() != null) {
                    existingTable4.setClientMdmId7(table4.getClientMdmId7());
                }
                if (table4.getNameId8() != null) {
                    existingTable4.setNameId8(table4.getNameId8());
                }
                if (table4.getParentResvNameId9() != null) {
                    existingTable4.setParentResvNameId9(table4.getParentResvNameId9());
                }
                if (table4.getContactId10() != null) {
                    existingTable4.setContactId10(table4.getContactId10());
                }
                if (table4.getAgenceId11() != null) {
                    existingTable4.setAgenceId11(table4.getAgenceId11());
                }
                if (table4.getAgenceNom12() != null) {
                    existingTable4.setAgenceNom12(table4.getAgenceNom12());
                }
                if (table4.getSocieteId13() != null) {
                    existingTable4.setSocieteId13(table4.getSocieteId13());
                }
                if (table4.getGroupeId14() != null) {
                    existingTable4.setGroupeId14(table4.getGroupeId14());
                }
                if (table4.getNumBloc15() != null) {
                    existingTable4.setNumBloc15(table4.getNumBloc15());
                }
                if (table4.getTypeResv16() != null) {
                    existingTable4.setTypeResv16(table4.getTypeResv16());
                }
                if (table4.getStatutResv17() != null) {
                    existingTable4.setStatutResv17(table4.getStatutResv17());
                }
                if (table4.getDateDebutResv18() != null) {
                    existingTable4.setDateDebutResv18(table4.getDateDebutResv18());
                }
                if (table4.getDateFinResv19() != null) {
                    existingTable4.setDateFinResv19(table4.getDateFinResv19());
                }
                if (table4.getTruncDateDebutResv20() != null) {
                    existingTable4.setTruncDateDebutResv20(table4.getTruncDateDebutResv20());
                }
                if (table4.getTruncDateFinResv21() != null) {
                    existingTable4.setTruncDateFinResv21(table4.getTruncDateFinResv21());
                }
                if (table4.getDateAnnResv22() != null) {
                    existingTable4.setDateAnnResv22(table4.getDateAnnResv22());
                }
                if (table4.getPseudoRoomYn23() != null) {
                    existingTable4.setPseudoRoomYn23(table4.getPseudoRoomYn23());
                }
                if (table4.getCreateurResv24() != null) {
                    existingTable4.setCreateurResv24(table4.getCreateurResv24());
                }
                if (table4.getNomCreateurResv25() != null) {
                    existingTable4.setNomCreateurResv25(table4.getNomCreateurResv25());
                }
                if (table4.getCodeGarantie26() != null) {
                    existingTable4.setCodeGarantie26(table4.getCodeGarantie26());
                }
                if (table4.getFlgDed27() != null) {
                    existingTable4.setFlgDed27(table4.getFlgDed27());
                }
                if (table4.getCodePays28() != null) {
                    existingTable4.setCodePays28(table4.getCodePays28());
                }
                if (table4.getLibPays29() != null) {
                    existingTable4.setLibPays29(table4.getLibPays29());
                }
                if (table4.getCodeNationalite30() != null) {
                    existingTable4.setCodeNationalite30(table4.getCodeNationalite30());
                }
                if (table4.getLibNationalite31() != null) {
                    existingTable4.setLibNationalite31(table4.getLibNationalite31());
                }
                if (table4.getCodeSource32() != null) {
                    existingTable4.setCodeSource32(table4.getCodeSource32());
                }
                if (table4.getLibSource33() != null) {
                    existingTable4.setLibSource33(table4.getLibSource33());
                }
                if (table4.getCodeGrandSource34() != null) {
                    existingTable4.setCodeGrandSource34(table4.getCodeGrandSource34());
                }
                if (table4.getCodeOrigine35() != null) {
                    existingTable4.setCodeOrigine35(table4.getCodeOrigine35());
                }
                if (table4.getLibOrigine36() != null) {
                    existingTable4.setLibOrigine36(table4.getLibOrigine36());
                }
                if (table4.getCodeMarche37() != null) {
                    existingTable4.setCodeMarche37(table4.getCodeMarche37());
                }
                if (table4.getLibMarche38() != null) {
                    existingTable4.setLibMarche38(table4.getLibMarche38());
                }
                if (table4.getCodeGrandMarche39() != null) {
                    existingTable4.setCodeGrandMarche39(table4.getCodeGrandMarche39());
                }
                if (table4.getLibGrandMarche40() != null) {
                    existingTable4.setLibGrandMarche40(table4.getLibGrandMarche40());
                }
                if (table4.getCodePrix41() != null) {
                    existingTable4.setCodePrix41(table4.getCodePrix41());
                }
                if (table4.getCategPrix42() != null) {
                    existingTable4.setCategPrix42(table4.getCategPrix42());
                }
                if (table4.getLibPrix43() != null) {
                    existingTable4.setLibPrix43(table4.getLibPrix43());
                }
                if (table4.getNumChb44() != null) {
                    existingTable4.setNumChb44(table4.getNumChb44());
                }
                if (table4.getDescriptionTypeChb45() != null) {
                    existingTable4.setDescriptionTypeChb45(table4.getDescriptionTypeChb45());
                }
                if (table4.getCodeTypeChb46() != null) {
                    existingTable4.setCodeTypeChb46(table4.getCodeTypeChb46());
                }
                if (table4.getClassChb47() != null) {
                    existingTable4.setClassChb47(table4.getClassChb47());
                }
                if (table4.getCaractChb48() != null) {
                    existingTable4.setCaractChb48(table4.getCaractChb48());
                }
                if (table4.getTypeChbDeReservation49() != null) {
                    existingTable4.setTypeChbDeReservation49(table4.getTypeChbDeReservation49());
                }
                if (table4.getDescriptionTypeChbDeResv50() != null) {
                    existingTable4.setDescriptionTypeChbDeResv50(table4.getDescriptionTypeChbDeResv50());
                }
                if (table4.getCodeTypeChbDeResv51() != null) {
                    existingTable4.setCodeTypeChbDeResv51(table4.getCodeTypeChbDeResv51());
                }
                if (table4.getStatutDeReservation52() != null) {
                    existingTable4.setStatutDeReservation52(table4.getStatutDeReservation52());
                }
                if (table4.getCircuitDistribution53() != null) {
                    existingTable4.setCircuitDistribution53(table4.getCircuitDistribution53());
                }
                if (table4.getCircuitDistribUserRegroup54() != null) {
                    existingTable4.setCircuitDistribUserRegroup54(table4.getCircuitDistribUserRegroup54());
                }
                if (table4.getNumCrs55() != null) {
                    existingTable4.setNumCrs55(table4.getNumCrs55());
                }
                if (table4.getTypeRefCrs56() != null) {
                    existingTable4.setTypeRefCrs56(table4.getTypeRefCrs56());
                }
                if (table4.getCrsInsertDate57() != null) {
                    existingTable4.setCrsInsertDate57(table4.getCrsInsertDate57());
                }
                if (table4.getDateCreaResv58() != null) {
                    existingTable4.setDateCreaResv58(table4.getDateCreaResv58());
                }
                if (table4.getDatePremier59() != null) {
                    existingTable4.setDatePremier59(table4.getDatePremier59());
                }
                if (table4.getStatutPremier60() != null) {
                    existingTable4.setStatutPremier60(table4.getStatutPremier60());
                }
                if (table4.getDateDernier61() != null) {
                    existingTable4.setDateDernier61(table4.getDateDernier61());
                }
                if (table4.getStatutDernier62() != null) {
                    existingTable4.setStatutDernier62(table4.getStatutDernier62());
                }
                if (table4.getDateDernierPseudo63() != null) {
                    existingTable4.setDateDernierPseudo63(table4.getDateDernierPseudo63());
                }
                if (table4.getStatutDernierPseudo64() != null) {
                    existingTable4.setStatutDernierPseudo64(table4.getStatutDernierPseudo64());
                }
                if (table4.getDiffDtCreaAnn65() != null) {
                    existingTable4.setDiffDtCreaAnn65(table4.getDiffDtCreaAnn65());
                }
                if (table4.getDiffDtArrAnn66() != null) {
                    existingTable4.setDiffDtArrAnn66(table4.getDiffDtArrAnn66());
                }
                if (table4.getLeadtime67() != null) {
                    existingTable4.setLeadtime67(table4.getLeadtime67());
                }
                if (table4.getLos68() != null) {
                    existingTable4.setLos68(table4.getLos68());
                }
                if (table4.getOccupantsGroupe69() != null) {
                    existingTable4.setOccupantsGroupe69(table4.getOccupantsGroupe69());
                }
                if (table4.getNbNuitee70() != null) {
                    existingTable4.setNbNuitee70(table4.getNbNuitee70());
                }
                if (table4.getNbNuiteeNnDed71() != null) {
                    existingTable4.setNbNuiteeNnDed71(table4.getNbNuiteeNnDed71());
                }
                if (table4.getNbResvAnn72() != null) {
                    existingTable4.setNbResvAnn72(table4.getNbResvAnn72());
                }
                if (table4.getNbAdu73() != null) {
                    existingTable4.setNbAdu73(table4.getNbAdu73());
                }
                if (table4.getNbEnf74() != null) {
                    existingTable4.setNbEnf74(table4.getNbEnf74());
                }
                if (table4.getNbPersDayU75() != null) {
                    existingTable4.setNbPersDayU75(table4.getNbPersDayU75());
                }
                if (table4.getNbPersArr76() != null) {
                    existingTable4.setNbPersArr76(table4.getNbPersArr76());
                }
                if (table4.getNbPersDep77() != null) {
                    existingTable4.setNbPersDep77(table4.getNbPersDep77());
                }
                if (table4.getNbPersAnn78() != null) {
                    existingTable4.setNbPersAnn78(table4.getNbPersAnn78());
                }
                if (table4.getNbPersNoshow79() != null) {
                    existingTable4.setNbPersNoshow79(table4.getNbPersNoshow79());
                }
                if (table4.getNbChbDayU80() != null) {
                    existingTable4.setNbChbDayU80(table4.getNbChbDayU80());
                }
                if (table4.getNbChbArr81() != null) {
                    existingTable4.setNbChbArr81(table4.getNbChbArr81());
                }
                if (table4.getNbChbDep82() != null) {
                    existingTable4.setNbChbDep82(table4.getNbChbDep82());
                }
                if (table4.getNbChbAnn83() != null) {
                    existingTable4.setNbChbAnn83(table4.getNbChbAnn83());
                }
                if (table4.getNbChbNoshow84() != null) {
                    existingTable4.setNbChbNoshow84(table4.getNbChbNoshow84());
                }
                if (table4.getRevenuNetChambre85() != null) {
                    existingTable4.setRevenuNetChambre85(table4.getRevenuNetChambre85());
                }
                if (table4.getRevenuTaxeChambre86() != null) {
                    existingTable4.setRevenuTaxeChambre86(table4.getRevenuTaxeChambre86());
                }
                if (table4.getRevenuNetChambreGlobal87() != null) {
                    existingTable4.setRevenuNetChambreGlobal87(table4.getRevenuNetChambreGlobal87());
                }
                if (table4.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable4.setRevenuTaxeChambreGlobal88(table4.getRevenuTaxeChambreGlobal88());
                }
                if (table4.getRevenuNetBq89() != null) {
                    existingTable4.setRevenuNetBq89(table4.getRevenuNetBq89());
                }
                if (table4.getRevenuTaxeBq90() != null) {
                    existingTable4.setRevenuTaxeBq90(table4.getRevenuTaxeBq90());
                }
                if (table4.getRevenuNetBqGlobal91() != null) {
                    existingTable4.setRevenuNetBqGlobal91(table4.getRevenuNetBqGlobal91());
                }
                if (table4.getRevenuTaxeBqGlobal92() != null) {
                    existingTable4.setRevenuTaxeBqGlobal92(table4.getRevenuTaxeBqGlobal92());
                }
                if (table4.getRevenuNetExtra93() != null) {
                    existingTable4.setRevenuNetExtra93(table4.getRevenuNetExtra93());
                }
                if (table4.getRevenuTaxeExtra94() != null) {
                    existingTable4.setRevenuTaxeExtra94(table4.getRevenuTaxeExtra94());
                }
                if (table4.getRevenuNetExtraGlobal95() != null) {
                    existingTable4.setRevenuNetExtraGlobal95(table4.getRevenuNetExtraGlobal95());
                }
                if (table4.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable4.setRevenuTaxeExtraGlobal96(table4.getRevenuTaxeExtraGlobal96());
                }
                if (table4.getRevenuNetTotal97() != null) {
                    existingTable4.setRevenuNetTotal97(table4.getRevenuNetTotal97());
                }
                if (table4.getRevenuTaxeTotal98() != null) {
                    existingTable4.setRevenuTaxeTotal98(table4.getRevenuTaxeTotal98());
                }
                if (table4.getRevenuNetTotalGlobal99() != null) {
                    existingTable4.setRevenuNetTotalGlobal99(table4.getRevenuNetTotalGlobal99());
                }
                if (table4.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable4.setRevenuTaxeTotalGlobal100(table4.getRevenuTaxeTotalGlobal100());
                }
                if (table4.getProdRevenuChambre101() != null) {
                    existingTable4.setProdRevenuChambre101(table4.getProdRevenuChambre101());
                }
                if (table4.getProdRevenuBq102() != null) {
                    existingTable4.setProdRevenuBq102(table4.getProdRevenuBq102());
                }
                if (table4.getProdRevenuExtra103() != null) {
                    existingTable4.setProdRevenuExtra103(table4.getProdRevenuExtra103());
                }
                if (table4.getProdRevenuTotal104() != null) {
                    existingTable4.setProdRevenuTotal104(table4.getProdRevenuTotal104());
                }
                if (table4.getProdChambreNbNuitees105() != null) {
                    existingTable4.setProdChambreNbNuitees105(table4.getProdChambreNbNuitees105());
                }
                if (table4.getTechCreateDate106() != null) {
                    existingTable4.setTechCreateDate106(table4.getTechCreateDate106());
                }
                if (table4.getTechUpdateDate107() != null) {
                    existingTable4.setTechUpdateDate107(table4.getTechUpdateDate107());
                }
                if (table4.getNumLigne108() != null) {
                    existingTable4.setNumLigne108(table4.getNumLigne108());
                }
                if (table4.getResort109() != null) {
                    existingTable4.setResort109(table4.getResort109());
                }
                if (table4.getResvNameId110() != null) {
                    existingTable4.setResvNameId110(table4.getResvNameId110());
                }
                if (table4.getClientOId111() != null) {
                    existingTable4.setClientOId111(table4.getClientOId111());
                }
                if (table4.getTypeChb112() != null) {
                    existingTable4.setTypeChb112(table4.getTypeChb112());
                }
                if (table4.getConfirmationNo113() != null) {
                    existingTable4.setConfirmationNo113(table4.getConfirmationNo113());
                }
                if (table4.getClientMdmId114() != null) {
                    existingTable4.setClientMdmId114(table4.getClientMdmId114());
                }
                if (table4.getNameId115() != null) {
                    existingTable4.setNameId115(table4.getNameId115());
                }
                if (table4.getParentResvNameId116() != null) {
                    existingTable4.setParentResvNameId116(table4.getParentResvNameId116());
                }
                if (table4.getContactId117() != null) {
                    existingTable4.setContactId117(table4.getContactId117());
                }
                if (table4.getAgenceId118() != null) {
                    existingTable4.setAgenceId118(table4.getAgenceId118());
                }
                if (table4.getAgenceNom119() != null) {
                    existingTable4.setAgenceNom119(table4.getAgenceNom119());
                }
                if (table4.getSocieteId120() != null) {
                    existingTable4.setSocieteId120(table4.getSocieteId120());
                }
                if (table4.getGroupeId121() != null) {
                    existingTable4.setGroupeId121(table4.getGroupeId121());
                }
                if (table4.getNumBloc122() != null) {
                    existingTable4.setNumBloc122(table4.getNumBloc122());
                }
                if (table4.getTypeResv123() != null) {
                    existingTable4.setTypeResv123(table4.getTypeResv123());
                }
                if (table4.getStatutResv124() != null) {
                    existingTable4.setStatutResv124(table4.getStatutResv124());
                }
                if (table4.getDateDebutResv125() != null) {
                    existingTable4.setDateDebutResv125(table4.getDateDebutResv125());
                }
                if (table4.getDateFinResv126() != null) {
                    existingTable4.setDateFinResv126(table4.getDateFinResv126());
                }
                if (table4.getTruncDateDebutResv127() != null) {
                    existingTable4.setTruncDateDebutResv127(table4.getTruncDateDebutResv127());
                }
                if (table4.getTruncDateFinResv128() != null) {
                    existingTable4.setTruncDateFinResv128(table4.getTruncDateFinResv128());
                }
                if (table4.getDateAnnResv129() != null) {
                    existingTable4.setDateAnnResv129(table4.getDateAnnResv129());
                }
                if (table4.getPseudoRoomYn130() != null) {
                    existingTable4.setPseudoRoomYn130(table4.getPseudoRoomYn130());
                }
                if (table4.getCreateurResv131() != null) {
                    existingTable4.setCreateurResv131(table4.getCreateurResv131());
                }
                if (table4.getNomCreateurResv132() != null) {
                    existingTable4.setNomCreateurResv132(table4.getNomCreateurResv132());
                }
                if (table4.getCodeGarantie133() != null) {
                    existingTable4.setCodeGarantie133(table4.getCodeGarantie133());
                }
                if (table4.getFlgDed134() != null) {
                    existingTable4.setFlgDed134(table4.getFlgDed134());
                }
                if (table4.getCodePays135() != null) {
                    existingTable4.setCodePays135(table4.getCodePays135());
                }
                if (table4.getLibPays136() != null) {
                    existingTable4.setLibPays136(table4.getLibPays136());
                }
                if (table4.getCodeNationalite137() != null) {
                    existingTable4.setCodeNationalite137(table4.getCodeNationalite137());
                }
                if (table4.getLibNationalite138() != null) {
                    existingTable4.setLibNationalite138(table4.getLibNationalite138());
                }
                if (table4.getCodeSource139() != null) {
                    existingTable4.setCodeSource139(table4.getCodeSource139());
                }
                if (table4.getLibSource140() != null) {
                    existingTable4.setLibSource140(table4.getLibSource140());
                }
                if (table4.getCodeGrandSource141() != null) {
                    existingTable4.setCodeGrandSource141(table4.getCodeGrandSource141());
                }
                if (table4.getCodeOrigine142() != null) {
                    existingTable4.setCodeOrigine142(table4.getCodeOrigine142());
                }
                if (table4.getLibOrigine143() != null) {
                    existingTable4.setLibOrigine143(table4.getLibOrigine143());
                }
                if (table4.getCodeMarche144() != null) {
                    existingTable4.setCodeMarche144(table4.getCodeMarche144());
                }
                if (table4.getLibMarche145() != null) {
                    existingTable4.setLibMarche145(table4.getLibMarche145());
                }
                if (table4.getCodeGrandMarche146() != null) {
                    existingTable4.setCodeGrandMarche146(table4.getCodeGrandMarche146());
                }
                if (table4.getLibGrandMarche147() != null) {
                    existingTable4.setLibGrandMarche147(table4.getLibGrandMarche147());
                }
                if (table4.getCodePrix148() != null) {
                    existingTable4.setCodePrix148(table4.getCodePrix148());
                }
                if (table4.getCategPrix149() != null) {
                    existingTable4.setCategPrix149(table4.getCategPrix149());
                }
                if (table4.getLibPrix150() != null) {
                    existingTable4.setLibPrix150(table4.getLibPrix150());
                }
                if (table4.getNumChb151() != null) {
                    existingTable4.setNumChb151(table4.getNumChb151());
                }
                if (table4.getDescriptionTypeChb152() != null) {
                    existingTable4.setDescriptionTypeChb152(table4.getDescriptionTypeChb152());
                }
                if (table4.getCodeTypeChb153() != null) {
                    existingTable4.setCodeTypeChb153(table4.getCodeTypeChb153());
                }
                if (table4.getClassChb154() != null) {
                    existingTable4.setClassChb154(table4.getClassChb154());
                }
                if (table4.getCaractChb155() != null) {
                    existingTable4.setCaractChb155(table4.getCaractChb155());
                }
                if (table4.getTypeChbDeReservation156() != null) {
                    existingTable4.setTypeChbDeReservation156(table4.getTypeChbDeReservation156());
                }
                if (table4.getDescriptionTypeChbDeResv157() != null) {
                    existingTable4.setDescriptionTypeChbDeResv157(table4.getDescriptionTypeChbDeResv157());
                }
                if (table4.getCodeTypeChbDeResv158() != null) {
                    existingTable4.setCodeTypeChbDeResv158(table4.getCodeTypeChbDeResv158());
                }
                if (table4.getStatutDeReservation159() != null) {
                    existingTable4.setStatutDeReservation159(table4.getStatutDeReservation159());
                }
                if (table4.getCircuitDistribution160() != null) {
                    existingTable4.setCircuitDistribution160(table4.getCircuitDistribution160());
                }
                if (table4.getCircuitDistribUserRegroup161() != null) {
                    existingTable4.setCircuitDistribUserRegroup161(table4.getCircuitDistribUserRegroup161());
                }
                if (table4.getNumCrs162() != null) {
                    existingTable4.setNumCrs162(table4.getNumCrs162());
                }
                if (table4.getTypeRefCrs163() != null) {
                    existingTable4.setTypeRefCrs163(table4.getTypeRefCrs163());
                }
                if (table4.getCrsInsertDate164() != null) {
                    existingTable4.setCrsInsertDate164(table4.getCrsInsertDate164());
                }
                if (table4.getDateCreaResv165() != null) {
                    existingTable4.setDateCreaResv165(table4.getDateCreaResv165());
                }
                if (table4.getDatePremier166() != null) {
                    existingTable4.setDatePremier166(table4.getDatePremier166());
                }
                if (table4.getStatutPremier167() != null) {
                    existingTable4.setStatutPremier167(table4.getStatutPremier167());
                }
                if (table4.getDateDernier168() != null) {
                    existingTable4.setDateDernier168(table4.getDateDernier168());
                }
                if (table4.getStatutDernier169() != null) {
                    existingTable4.setStatutDernier169(table4.getStatutDernier169());
                }
                if (table4.getDateDernierPseudo170() != null) {
                    existingTable4.setDateDernierPseudo170(table4.getDateDernierPseudo170());
                }
                if (table4.getStatutDernierPseudo171() != null) {
                    existingTable4.setStatutDernierPseudo171(table4.getStatutDernierPseudo171());
                }
                if (table4.getDiffDtCreaAnn172() != null) {
                    existingTable4.setDiffDtCreaAnn172(table4.getDiffDtCreaAnn172());
                }
                if (table4.getDiffDtArrAnn173() != null) {
                    existingTable4.setDiffDtArrAnn173(table4.getDiffDtArrAnn173());
                }
                if (table4.getLeadtime174() != null) {
                    existingTable4.setLeadtime174(table4.getLeadtime174());
                }
                if (table4.getLos175() != null) {
                    existingTable4.setLos175(table4.getLos175());
                }
                if (table4.getOccupantsGroupe176() != null) {
                    existingTable4.setOccupantsGroupe176(table4.getOccupantsGroupe176());
                }
                if (table4.getNbNuitee177() != null) {
                    existingTable4.setNbNuitee177(table4.getNbNuitee177());
                }
                if (table4.getNbNuiteeNnDed178() != null) {
                    existingTable4.setNbNuiteeNnDed178(table4.getNbNuiteeNnDed178());
                }
                if (table4.getNbResvAnn179() != null) {
                    existingTable4.setNbResvAnn179(table4.getNbResvAnn179());
                }
                if (table4.getNbAdu180() != null) {
                    existingTable4.setNbAdu180(table4.getNbAdu180());
                }
                if (table4.getNbEnf181() != null) {
                    existingTable4.setNbEnf181(table4.getNbEnf181());
                }
                if (table4.getNbPersDayU182() != null) {
                    existingTable4.setNbPersDayU182(table4.getNbPersDayU182());
                }
                if (table4.getNbPersArr183() != null) {
                    existingTable4.setNbPersArr183(table4.getNbPersArr183());
                }
                if (table4.getNbPersDep184() != null) {
                    existingTable4.setNbPersDep184(table4.getNbPersDep184());
                }
                if (table4.getNbPersAnn185() != null) {
                    existingTable4.setNbPersAnn185(table4.getNbPersAnn185());
                }
                if (table4.getNbPersNoshow186() != null) {
                    existingTable4.setNbPersNoshow186(table4.getNbPersNoshow186());
                }
                if (table4.getNbChbDayU187() != null) {
                    existingTable4.setNbChbDayU187(table4.getNbChbDayU187());
                }
                if (table4.getNbChbArr188() != null) {
                    existingTable4.setNbChbArr188(table4.getNbChbArr188());
                }
                if (table4.getNbChbDep189() != null) {
                    existingTable4.setNbChbDep189(table4.getNbChbDep189());
                }
                if (table4.getNbChbAnn190() != null) {
                    existingTable4.setNbChbAnn190(table4.getNbChbAnn190());
                }
                if (table4.getNbChbNoshow191() != null) {
                    existingTable4.setNbChbNoshow191(table4.getNbChbNoshow191());
                }
                if (table4.getRevenuNetChambre192() != null) {
                    existingTable4.setRevenuNetChambre192(table4.getRevenuNetChambre192());
                }
                if (table4.getRevenuTaxeChambre193() != null) {
                    existingTable4.setRevenuTaxeChambre193(table4.getRevenuTaxeChambre193());
                }
                if (table4.getRevenuNetChambreGlobal194() != null) {
                    existingTable4.setRevenuNetChambreGlobal194(table4.getRevenuNetChambreGlobal194());
                }
                if (table4.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable4.setRevenuTaxeChambreGlobal195(table4.getRevenuTaxeChambreGlobal195());
                }
                if (table4.getRevenuNetBq196() != null) {
                    existingTable4.setRevenuNetBq196(table4.getRevenuNetBq196());
                }
                if (table4.getRevenuTaxeBq197() != null) {
                    existingTable4.setRevenuTaxeBq197(table4.getRevenuTaxeBq197());
                }
                if (table4.getRevenuNetBqGlobal198() != null) {
                    existingTable4.setRevenuNetBqGlobal198(table4.getRevenuNetBqGlobal198());
                }
                if (table4.getRevenuTaxeBqGlobal199() != null) {
                    existingTable4.setRevenuTaxeBqGlobal199(table4.getRevenuTaxeBqGlobal199());
                }
                if (table4.getRevenuNetExtra200() != null) {
                    existingTable4.setRevenuNetExtra200(table4.getRevenuNetExtra200());
                }
                if (table4.getRevenuTaxeExtra201() != null) {
                    existingTable4.setRevenuTaxeExtra201(table4.getRevenuTaxeExtra201());
                }
                if (table4.getRevenuNetExtraGlobal202() != null) {
                    existingTable4.setRevenuNetExtraGlobal202(table4.getRevenuNetExtraGlobal202());
                }
                if (table4.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable4.setRevenuTaxeExtraGlobal203(table4.getRevenuTaxeExtraGlobal203());
                }
                if (table4.getRevenuNetTotal204() != null) {
                    existingTable4.setRevenuNetTotal204(table4.getRevenuNetTotal204());
                }
                if (table4.getRevenuTaxeTotal205() != null) {
                    existingTable4.setRevenuTaxeTotal205(table4.getRevenuTaxeTotal205());
                }
                if (table4.getRevenuNetTotalGlobal206() != null) {
                    existingTable4.setRevenuNetTotalGlobal206(table4.getRevenuNetTotalGlobal206());
                }
                if (table4.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable4.setRevenuTaxeTotalGlobal207(table4.getRevenuTaxeTotalGlobal207());
                }
                if (table4.getProdRevenuChambre208() != null) {
                    existingTable4.setProdRevenuChambre208(table4.getProdRevenuChambre208());
                }
                if (table4.getProdRevenuBq209() != null) {
                    existingTable4.setProdRevenuBq209(table4.getProdRevenuBq209());
                }
                if (table4.getProdRevenuExtra210() != null) {
                    existingTable4.setProdRevenuExtra210(table4.getProdRevenuExtra210());
                }
                if (table4.getProdRevenuTotal211() != null) {
                    existingTable4.setProdRevenuTotal211(table4.getProdRevenuTotal211());
                }
                if (table4.getProdChambreNbNuitees212() != null) {
                    existingTable4.setProdChambreNbNuitees212(table4.getProdChambreNbNuitees212());
                }
                if (table4.getTechCreateDate213() != null) {
                    existingTable4.setTechCreateDate213(table4.getTechCreateDate213());
                }
                if (table4.getTechUpdateDate214() != null) {
                    existingTable4.setTechUpdateDate214(table4.getTechUpdateDate214());
                }
                if (table4.getNumLigne215() != null) {
                    existingTable4.setNumLigne215(table4.getNumLigne215());
                }
                if (table4.getResort216() != null) {
                    existingTable4.setResort216(table4.getResort216());
                }
                if (table4.getResvNameId217() != null) {
                    existingTable4.setResvNameId217(table4.getResvNameId217());
                }
                if (table4.getClientOId218() != null) {
                    existingTable4.setClientOId218(table4.getClientOId218());
                }
                if (table4.getTypeChb219() != null) {
                    existingTable4.setTypeChb219(table4.getTypeChb219());
                }
                if (table4.getConfirmationNo220() != null) {
                    existingTable4.setConfirmationNo220(table4.getConfirmationNo220());
                }
                if (table4.getClientMdmId221() != null) {
                    existingTable4.setClientMdmId221(table4.getClientMdmId221());
                }
                if (table4.getNameId222() != null) {
                    existingTable4.setNameId222(table4.getNameId222());
                }
                if (table4.getParentResvNameId223() != null) {
                    existingTable4.setParentResvNameId223(table4.getParentResvNameId223());
                }
                if (table4.getContactId224() != null) {
                    existingTable4.setContactId224(table4.getContactId224());
                }
                if (table4.getAgenceId225() != null) {
                    existingTable4.setAgenceId225(table4.getAgenceId225());
                }
                if (table4.getAgenceNom226() != null) {
                    existingTable4.setAgenceNom226(table4.getAgenceNom226());
                }
                if (table4.getSocieteId227() != null) {
                    existingTable4.setSocieteId227(table4.getSocieteId227());
                }
                if (table4.getGroupeId228() != null) {
                    existingTable4.setGroupeId228(table4.getGroupeId228());
                }
                if (table4.getNumBloc229() != null) {
                    existingTable4.setNumBloc229(table4.getNumBloc229());
                }
                if (table4.getTypeResv230() != null) {
                    existingTable4.setTypeResv230(table4.getTypeResv230());
                }
                if (table4.getStatutResv231() != null) {
                    existingTable4.setStatutResv231(table4.getStatutResv231());
                }
                if (table4.getDateDebutResv232() != null) {
                    existingTable4.setDateDebutResv232(table4.getDateDebutResv232());
                }
                if (table4.getDateFinResv233() != null) {
                    existingTable4.setDateFinResv233(table4.getDateFinResv233());
                }
                if (table4.getTruncDateDebutResv234() != null) {
                    existingTable4.setTruncDateDebutResv234(table4.getTruncDateDebutResv234());
                }
                if (table4.getTruncDateFinResv235() != null) {
                    existingTable4.setTruncDateFinResv235(table4.getTruncDateFinResv235());
                }
                if (table4.getDateAnnResv236() != null) {
                    existingTable4.setDateAnnResv236(table4.getDateAnnResv236());
                }
                if (table4.getPseudoRoomYn237() != null) {
                    existingTable4.setPseudoRoomYn237(table4.getPseudoRoomYn237());
                }
                if (table4.getCreateurResv238() != null) {
                    existingTable4.setCreateurResv238(table4.getCreateurResv238());
                }
                if (table4.getNomCreateurResv239() != null) {
                    existingTable4.setNomCreateurResv239(table4.getNomCreateurResv239());
                }
                if (table4.getCodeGarantie240() != null) {
                    existingTable4.setCodeGarantie240(table4.getCodeGarantie240());
                }
                if (table4.getFlgDed241() != null) {
                    existingTable4.setFlgDed241(table4.getFlgDed241());
                }
                if (table4.getCodePays242() != null) {
                    existingTable4.setCodePays242(table4.getCodePays242());
                }
                if (table4.getLibPays243() != null) {
                    existingTable4.setLibPays243(table4.getLibPays243());
                }
                if (table4.getCodeNationalite244() != null) {
                    existingTable4.setCodeNationalite244(table4.getCodeNationalite244());
                }
                if (table4.getLibNationalite245() != null) {
                    existingTable4.setLibNationalite245(table4.getLibNationalite245());
                }
                if (table4.getCodeSource246() != null) {
                    existingTable4.setCodeSource246(table4.getCodeSource246());
                }
                if (table4.getLibSource247() != null) {
                    existingTable4.setLibSource247(table4.getLibSource247());
                }
                if (table4.getCodeGrandSource248() != null) {
                    existingTable4.setCodeGrandSource248(table4.getCodeGrandSource248());
                }
                if (table4.getCodeOrigine249() != null) {
                    existingTable4.setCodeOrigine249(table4.getCodeOrigine249());
                }
                if (table4.getLibOrigine250() != null) {
                    existingTable4.setLibOrigine250(table4.getLibOrigine250());
                }
                if (table4.getCodeMarche251() != null) {
                    existingTable4.setCodeMarche251(table4.getCodeMarche251());
                }
                if (table4.getLibMarche252() != null) {
                    existingTable4.setLibMarche252(table4.getLibMarche252());
                }
                if (table4.getCodeGrandMarche253() != null) {
                    existingTable4.setCodeGrandMarche253(table4.getCodeGrandMarche253());
                }
                if (table4.getLibGrandMarche254() != null) {
                    existingTable4.setLibGrandMarche254(table4.getLibGrandMarche254());
                }
                if (table4.getCodePrix255() != null) {
                    existingTable4.setCodePrix255(table4.getCodePrix255());
                }
                if (table4.getCategPrix256() != null) {
                    existingTable4.setCategPrix256(table4.getCategPrix256());
                }
                if (table4.getLibPrix257() != null) {
                    existingTable4.setLibPrix257(table4.getLibPrix257());
                }
                if (table4.getNumChb258() != null) {
                    existingTable4.setNumChb258(table4.getNumChb258());
                }
                if (table4.getDescriptionTypeChb259() != null) {
                    existingTable4.setDescriptionTypeChb259(table4.getDescriptionTypeChb259());
                }
                if (table4.getCodeTypeChb260() != null) {
                    existingTable4.setCodeTypeChb260(table4.getCodeTypeChb260());
                }
                if (table4.getClassChb261() != null) {
                    existingTable4.setClassChb261(table4.getClassChb261());
                }
                if (table4.getCaractChb262() != null) {
                    existingTable4.setCaractChb262(table4.getCaractChb262());
                }
                if (table4.getTypeChbDeReservation263() != null) {
                    existingTable4.setTypeChbDeReservation263(table4.getTypeChbDeReservation263());
                }
                if (table4.getDescriptionTypeChbDeResv264() != null) {
                    existingTable4.setDescriptionTypeChbDeResv264(table4.getDescriptionTypeChbDeResv264());
                }
                if (table4.getCodeTypeChbDeResv265() != null) {
                    existingTable4.setCodeTypeChbDeResv265(table4.getCodeTypeChbDeResv265());
                }
                if (table4.getStatutDeReservation266() != null) {
                    existingTable4.setStatutDeReservation266(table4.getStatutDeReservation266());
                }
                if (table4.getCircuitDistribution267() != null) {
                    existingTable4.setCircuitDistribution267(table4.getCircuitDistribution267());
                }
                if (table4.getCircuitDistribUserRegroup268() != null) {
                    existingTable4.setCircuitDistribUserRegroup268(table4.getCircuitDistribUserRegroup268());
                }
                if (table4.getNumCrs269() != null) {
                    existingTable4.setNumCrs269(table4.getNumCrs269());
                }
                if (table4.getTypeRefCrs270() != null) {
                    existingTable4.setTypeRefCrs270(table4.getTypeRefCrs270());
                }
                if (table4.getCrsInsertDate271() != null) {
                    existingTable4.setCrsInsertDate271(table4.getCrsInsertDate271());
                }
                if (table4.getDateCreaResv272() != null) {
                    existingTable4.setDateCreaResv272(table4.getDateCreaResv272());
                }
                if (table4.getDatePremier273() != null) {
                    existingTable4.setDatePremier273(table4.getDatePremier273());
                }
                if (table4.getStatutPremier274() != null) {
                    existingTable4.setStatutPremier274(table4.getStatutPremier274());
                }
                if (table4.getDateDernier275() != null) {
                    existingTable4.setDateDernier275(table4.getDateDernier275());
                }
                if (table4.getStatutDernier276() != null) {
                    existingTable4.setStatutDernier276(table4.getStatutDernier276());
                }
                if (table4.getDateDernierPseudo277() != null) {
                    existingTable4.setDateDernierPseudo277(table4.getDateDernierPseudo277());
                }
                if (table4.getStatutDernierPseudo278() != null) {
                    existingTable4.setStatutDernierPseudo278(table4.getStatutDernierPseudo278());
                }
                if (table4.getDiffDtCreaAnn279() != null) {
                    existingTable4.setDiffDtCreaAnn279(table4.getDiffDtCreaAnn279());
                }
                if (table4.getDiffDtArrAnn280() != null) {
                    existingTable4.setDiffDtArrAnn280(table4.getDiffDtArrAnn280());
                }
                if (table4.getLeadtime281() != null) {
                    existingTable4.setLeadtime281(table4.getLeadtime281());
                }
                if (table4.getLos282() != null) {
                    existingTable4.setLos282(table4.getLos282());
                }
                if (table4.getOccupantsGroupe283() != null) {
                    existingTable4.setOccupantsGroupe283(table4.getOccupantsGroupe283());
                }
                if (table4.getNbNuitee284() != null) {
                    existingTable4.setNbNuitee284(table4.getNbNuitee284());
                }
                if (table4.getNbNuiteeNnDed285() != null) {
                    existingTable4.setNbNuiteeNnDed285(table4.getNbNuiteeNnDed285());
                }
                if (table4.getNbResvAnn286() != null) {
                    existingTable4.setNbResvAnn286(table4.getNbResvAnn286());
                }
                if (table4.getNbAdu287() != null) {
                    existingTable4.setNbAdu287(table4.getNbAdu287());
                }
                if (table4.getNbEnf288() != null) {
                    existingTable4.setNbEnf288(table4.getNbEnf288());
                }
                if (table4.getNbPersDayU289() != null) {
                    existingTable4.setNbPersDayU289(table4.getNbPersDayU289());
                }
                if (table4.getNbPersArr290() != null) {
                    existingTable4.setNbPersArr290(table4.getNbPersArr290());
                }
                if (table4.getNbPersDep291() != null) {
                    existingTable4.setNbPersDep291(table4.getNbPersDep291());
                }
                if (table4.getNbPersAnn292() != null) {
                    existingTable4.setNbPersAnn292(table4.getNbPersAnn292());
                }
                if (table4.getNbPersNoshow293() != null) {
                    existingTable4.setNbPersNoshow293(table4.getNbPersNoshow293());
                }
                if (table4.getNbChbDayU294() != null) {
                    existingTable4.setNbChbDayU294(table4.getNbChbDayU294());
                }
                if (table4.getNbChbArr295() != null) {
                    existingTable4.setNbChbArr295(table4.getNbChbArr295());
                }
                if (table4.getNbChbDep296() != null) {
                    existingTable4.setNbChbDep296(table4.getNbChbDep296());
                }
                if (table4.getNbChbAnn297() != null) {
                    existingTable4.setNbChbAnn297(table4.getNbChbAnn297());
                }
                if (table4.getNbChbNoshow298() != null) {
                    existingTable4.setNbChbNoshow298(table4.getNbChbNoshow298());
                }
                if (table4.getRevenuNetChambre299() != null) {
                    existingTable4.setRevenuNetChambre299(table4.getRevenuNetChambre299());
                }
                if (table4.getRevenuTaxeChambre300() != null) {
                    existingTable4.setRevenuTaxeChambre300(table4.getRevenuTaxeChambre300());
                }
                if (table4.getRevenuNetChambreGlobal301() != null) {
                    existingTable4.setRevenuNetChambreGlobal301(table4.getRevenuNetChambreGlobal301());
                }
                if (table4.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable4.setRevenuTaxeChambreGlobal302(table4.getRevenuTaxeChambreGlobal302());
                }
                if (table4.getRevenuNetBq303() != null) {
                    existingTable4.setRevenuNetBq303(table4.getRevenuNetBq303());
                }
                if (table4.getRevenuTaxeBq304() != null) {
                    existingTable4.setRevenuTaxeBq304(table4.getRevenuTaxeBq304());
                }
                if (table4.getRevenuNetBqGlobal305() != null) {
                    existingTable4.setRevenuNetBqGlobal305(table4.getRevenuNetBqGlobal305());
                }
                if (table4.getRevenuTaxeBqGlobal306() != null) {
                    existingTable4.setRevenuTaxeBqGlobal306(table4.getRevenuTaxeBqGlobal306());
                }
                if (table4.getRevenuNetExtra307() != null) {
                    existingTable4.setRevenuNetExtra307(table4.getRevenuNetExtra307());
                }
                if (table4.getRevenuTaxeExtra308() != null) {
                    existingTable4.setRevenuTaxeExtra308(table4.getRevenuTaxeExtra308());
                }
                if (table4.getRevenuNetExtraGlobal309() != null) {
                    existingTable4.setRevenuNetExtraGlobal309(table4.getRevenuNetExtraGlobal309());
                }
                if (table4.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable4.setRevenuTaxeExtraGlobal310(table4.getRevenuTaxeExtraGlobal310());
                }

                return existingTable4;
            })
            .map(table4Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table4.getId().toString())
        );
    }

    /**
     * {@code GET  /table-4-s} : get all the table4s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table4s in body.
     */
    @GetMapping("")
    public List<Table4> getAllTable4s() {
        log.debug("REST request to get all Table4s");
        return table4Repository.findAll();
    }

    /**
     * {@code GET  /table-4-s/:id} : get the "id" table4.
     *
     * @param id the id of the table4 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table4, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table4> getTable4(@PathVariable("id") Long id) {
        log.debug("REST request to get Table4 : {}", id);
        Optional<Table4> table4 = table4Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table4);
    }

    /**
     * {@code DELETE  /table-4-s/:id} : delete the "id" table4.
     *
     * @param id the id of the table4 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable4(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table4 : {}", id);
        table4Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
