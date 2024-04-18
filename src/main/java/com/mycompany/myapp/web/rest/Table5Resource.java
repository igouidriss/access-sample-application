package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table5;
import com.mycompany.myapp.repository.Table5Repository;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.Table5}.
 */
@RestController
@RequestMapping("/api/table-5-s")
@Transactional
public class Table5Resource {

    private final Logger log = LoggerFactory.getLogger(Table5Resource.class);

    private static final String ENTITY_NAME = "accessSampleApplicationTable5";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table5Repository table5Repository;

    public Table5Resource(Table5Repository table5Repository) {
        this.table5Repository = table5Repository;
    }

    /**
     * {@code POST  /table-5-s} : Create a new table5.
     *
     * @param table5 the table5 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table5, or with status {@code 400 (Bad Request)} if the table5 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table5> createTable5(@RequestBody Table5 table5) throws URISyntaxException {
        log.debug("REST request to save Table5 : {}", table5);
        if (table5.getId() != null) {
            throw new BadRequestAlertException("A new table5 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table5 = table5Repository.save(table5);
        return ResponseEntity.created(new URI("/api/table-5-s/" + table5.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table5.getId().toString()))
            .body(table5);
    }

    /**
     * {@code PUT  /table-5-s/:id} : Updates an existing table5.
     *
     * @param id the id of the table5 to save.
     * @param table5 the table5 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table5,
     * or with status {@code 400 (Bad Request)} if the table5 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table5 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table5> updateTable5(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table5 table5)
        throws URISyntaxException {
        log.debug("REST request to update Table5 : {}, {}", id, table5);
        if (table5.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table5.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table5Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table5 = table5Repository.save(table5);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table5.getId().toString()))
            .body(table5);
    }

    /**
     * {@code PATCH  /table-5-s/:id} : Partial updates given fields of an existing table5, field will ignore if it is null
     *
     * @param id the id of the table5 to save.
     * @param table5 the table5 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table5,
     * or with status {@code 400 (Bad Request)} if the table5 is not valid,
     * or with status {@code 404 (Not Found)} if the table5 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table5 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table5> partialUpdateTable5(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table5 table5
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table5 partially : {}, {}", id, table5);
        if (table5.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table5.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table5Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table5> result = table5Repository
            .findById(table5.getId())
            .map(existingTable5 -> {
                if (table5.getNumLigne1() != null) {
                    existingTable5.setNumLigne1(table5.getNumLigne1());
                }
                if (table5.getResort2() != null) {
                    existingTable5.setResort2(table5.getResort2());
                }
                if (table5.getResvNameId3() != null) {
                    existingTable5.setResvNameId3(table5.getResvNameId3());
                }
                if (table5.getClientOId4() != null) {
                    existingTable5.setClientOId4(table5.getClientOId4());
                }
                if (table5.getTypeChb5() != null) {
                    existingTable5.setTypeChb5(table5.getTypeChb5());
                }
                if (table5.getConfirmationNo6() != null) {
                    existingTable5.setConfirmationNo6(table5.getConfirmationNo6());
                }
                if (table5.getClientMdmId7() != null) {
                    existingTable5.setClientMdmId7(table5.getClientMdmId7());
                }
                if (table5.getNameId8() != null) {
                    existingTable5.setNameId8(table5.getNameId8());
                }
                if (table5.getParentResvNameId9() != null) {
                    existingTable5.setParentResvNameId9(table5.getParentResvNameId9());
                }
                if (table5.getContactId10() != null) {
                    existingTable5.setContactId10(table5.getContactId10());
                }
                if (table5.getAgenceId11() != null) {
                    existingTable5.setAgenceId11(table5.getAgenceId11());
                }
                if (table5.getAgenceNom12() != null) {
                    existingTable5.setAgenceNom12(table5.getAgenceNom12());
                }
                if (table5.getSocieteId13() != null) {
                    existingTable5.setSocieteId13(table5.getSocieteId13());
                }
                if (table5.getGroupeId14() != null) {
                    existingTable5.setGroupeId14(table5.getGroupeId14());
                }
                if (table5.getNumBloc15() != null) {
                    existingTable5.setNumBloc15(table5.getNumBloc15());
                }
                if (table5.getTypeResv16() != null) {
                    existingTable5.setTypeResv16(table5.getTypeResv16());
                }
                if (table5.getStatutResv17() != null) {
                    existingTable5.setStatutResv17(table5.getStatutResv17());
                }
                if (table5.getDateDebutResv18() != null) {
                    existingTable5.setDateDebutResv18(table5.getDateDebutResv18());
                }
                if (table5.getDateFinResv19() != null) {
                    existingTable5.setDateFinResv19(table5.getDateFinResv19());
                }
                if (table5.getTruncDateDebutResv20() != null) {
                    existingTable5.setTruncDateDebutResv20(table5.getTruncDateDebutResv20());
                }
                if (table5.getTruncDateFinResv21() != null) {
                    existingTable5.setTruncDateFinResv21(table5.getTruncDateFinResv21());
                }
                if (table5.getDateAnnResv22() != null) {
                    existingTable5.setDateAnnResv22(table5.getDateAnnResv22());
                }
                if (table5.getPseudoRoomYn23() != null) {
                    existingTable5.setPseudoRoomYn23(table5.getPseudoRoomYn23());
                }
                if (table5.getCreateurResv24() != null) {
                    existingTable5.setCreateurResv24(table5.getCreateurResv24());
                }
                if (table5.getNomCreateurResv25() != null) {
                    existingTable5.setNomCreateurResv25(table5.getNomCreateurResv25());
                }
                if (table5.getCodeGarantie26() != null) {
                    existingTable5.setCodeGarantie26(table5.getCodeGarantie26());
                }
                if (table5.getFlgDed27() != null) {
                    existingTable5.setFlgDed27(table5.getFlgDed27());
                }
                if (table5.getCodePays28() != null) {
                    existingTable5.setCodePays28(table5.getCodePays28());
                }
                if (table5.getLibPays29() != null) {
                    existingTable5.setLibPays29(table5.getLibPays29());
                }
                if (table5.getCodeNationalite30() != null) {
                    existingTable5.setCodeNationalite30(table5.getCodeNationalite30());
                }
                if (table5.getLibNationalite31() != null) {
                    existingTable5.setLibNationalite31(table5.getLibNationalite31());
                }
                if (table5.getCodeSource32() != null) {
                    existingTable5.setCodeSource32(table5.getCodeSource32());
                }
                if (table5.getLibSource33() != null) {
                    existingTable5.setLibSource33(table5.getLibSource33());
                }
                if (table5.getCodeGrandSource34() != null) {
                    existingTable5.setCodeGrandSource34(table5.getCodeGrandSource34());
                }
                if (table5.getCodeOrigine35() != null) {
                    existingTable5.setCodeOrigine35(table5.getCodeOrigine35());
                }
                if (table5.getLibOrigine36() != null) {
                    existingTable5.setLibOrigine36(table5.getLibOrigine36());
                }
                if (table5.getCodeMarche37() != null) {
                    existingTable5.setCodeMarche37(table5.getCodeMarche37());
                }
                if (table5.getLibMarche38() != null) {
                    existingTable5.setLibMarche38(table5.getLibMarche38());
                }
                if (table5.getCodeGrandMarche39() != null) {
                    existingTable5.setCodeGrandMarche39(table5.getCodeGrandMarche39());
                }
                if (table5.getLibGrandMarche40() != null) {
                    existingTable5.setLibGrandMarche40(table5.getLibGrandMarche40());
                }
                if (table5.getCodePrix41() != null) {
                    existingTable5.setCodePrix41(table5.getCodePrix41());
                }
                if (table5.getCategPrix42() != null) {
                    existingTable5.setCategPrix42(table5.getCategPrix42());
                }
                if (table5.getLibPrix43() != null) {
                    existingTable5.setLibPrix43(table5.getLibPrix43());
                }
                if (table5.getNumChb44() != null) {
                    existingTable5.setNumChb44(table5.getNumChb44());
                }
                if (table5.getDescriptionTypeChb45() != null) {
                    existingTable5.setDescriptionTypeChb45(table5.getDescriptionTypeChb45());
                }
                if (table5.getCodeTypeChb46() != null) {
                    existingTable5.setCodeTypeChb46(table5.getCodeTypeChb46());
                }
                if (table5.getClassChb47() != null) {
                    existingTable5.setClassChb47(table5.getClassChb47());
                }
                if (table5.getCaractChb48() != null) {
                    existingTable5.setCaractChb48(table5.getCaractChb48());
                }
                if (table5.getTypeChbDeReservation49() != null) {
                    existingTable5.setTypeChbDeReservation49(table5.getTypeChbDeReservation49());
                }
                if (table5.getDescriptionTypeChbDeResv50() != null) {
                    existingTable5.setDescriptionTypeChbDeResv50(table5.getDescriptionTypeChbDeResv50());
                }
                if (table5.getCodeTypeChbDeResv51() != null) {
                    existingTable5.setCodeTypeChbDeResv51(table5.getCodeTypeChbDeResv51());
                }
                if (table5.getStatutDeReservation52() != null) {
                    existingTable5.setStatutDeReservation52(table5.getStatutDeReservation52());
                }
                if (table5.getCircuitDistribution53() != null) {
                    existingTable5.setCircuitDistribution53(table5.getCircuitDistribution53());
                }
                if (table5.getCircuitDistribUserRegroup54() != null) {
                    existingTable5.setCircuitDistribUserRegroup54(table5.getCircuitDistribUserRegroup54());
                }
                if (table5.getNumCrs55() != null) {
                    existingTable5.setNumCrs55(table5.getNumCrs55());
                }
                if (table5.getTypeRefCrs56() != null) {
                    existingTable5.setTypeRefCrs56(table5.getTypeRefCrs56());
                }
                if (table5.getCrsInsertDate57() != null) {
                    existingTable5.setCrsInsertDate57(table5.getCrsInsertDate57());
                }
                if (table5.getDateCreaResv58() != null) {
                    existingTable5.setDateCreaResv58(table5.getDateCreaResv58());
                }
                if (table5.getDatePremier59() != null) {
                    existingTable5.setDatePremier59(table5.getDatePremier59());
                }
                if (table5.getStatutPremier60() != null) {
                    existingTable5.setStatutPremier60(table5.getStatutPremier60());
                }
                if (table5.getDateDernier61() != null) {
                    existingTable5.setDateDernier61(table5.getDateDernier61());
                }
                if (table5.getStatutDernier62() != null) {
                    existingTable5.setStatutDernier62(table5.getStatutDernier62());
                }
                if (table5.getDateDernierPseudo63() != null) {
                    existingTable5.setDateDernierPseudo63(table5.getDateDernierPseudo63());
                }
                if (table5.getStatutDernierPseudo64() != null) {
                    existingTable5.setStatutDernierPseudo64(table5.getStatutDernierPseudo64());
                }
                if (table5.getDiffDtCreaAnn65() != null) {
                    existingTable5.setDiffDtCreaAnn65(table5.getDiffDtCreaAnn65());
                }
                if (table5.getDiffDtArrAnn66() != null) {
                    existingTable5.setDiffDtArrAnn66(table5.getDiffDtArrAnn66());
                }
                if (table5.getLeadtime67() != null) {
                    existingTable5.setLeadtime67(table5.getLeadtime67());
                }
                if (table5.getLos68() != null) {
                    existingTable5.setLos68(table5.getLos68());
                }
                if (table5.getOccupantsGroupe69() != null) {
                    existingTable5.setOccupantsGroupe69(table5.getOccupantsGroupe69());
                }
                if (table5.getNbNuitee70() != null) {
                    existingTable5.setNbNuitee70(table5.getNbNuitee70());
                }
                if (table5.getNbNuiteeNnDed71() != null) {
                    existingTable5.setNbNuiteeNnDed71(table5.getNbNuiteeNnDed71());
                }
                if (table5.getNbResvAnn72() != null) {
                    existingTable5.setNbResvAnn72(table5.getNbResvAnn72());
                }
                if (table5.getNbAdu73() != null) {
                    existingTable5.setNbAdu73(table5.getNbAdu73());
                }
                if (table5.getNbEnf74() != null) {
                    existingTable5.setNbEnf74(table5.getNbEnf74());
                }
                if (table5.getNbPersDayU75() != null) {
                    existingTable5.setNbPersDayU75(table5.getNbPersDayU75());
                }
                if (table5.getNbPersArr76() != null) {
                    existingTable5.setNbPersArr76(table5.getNbPersArr76());
                }
                if (table5.getNbPersDep77() != null) {
                    existingTable5.setNbPersDep77(table5.getNbPersDep77());
                }
                if (table5.getNbPersAnn78() != null) {
                    existingTable5.setNbPersAnn78(table5.getNbPersAnn78());
                }
                if (table5.getNbPersNoshow79() != null) {
                    existingTable5.setNbPersNoshow79(table5.getNbPersNoshow79());
                }
                if (table5.getNbChbDayU80() != null) {
                    existingTable5.setNbChbDayU80(table5.getNbChbDayU80());
                }
                if (table5.getNbChbArr81() != null) {
                    existingTable5.setNbChbArr81(table5.getNbChbArr81());
                }
                if (table5.getNbChbDep82() != null) {
                    existingTable5.setNbChbDep82(table5.getNbChbDep82());
                }
                if (table5.getNbChbAnn83() != null) {
                    existingTable5.setNbChbAnn83(table5.getNbChbAnn83());
                }
                if (table5.getNbChbNoshow84() != null) {
                    existingTable5.setNbChbNoshow84(table5.getNbChbNoshow84());
                }
                if (table5.getRevenuNetChambre85() != null) {
                    existingTable5.setRevenuNetChambre85(table5.getRevenuNetChambre85());
                }
                if (table5.getRevenuTaxeChambre86() != null) {
                    existingTable5.setRevenuTaxeChambre86(table5.getRevenuTaxeChambre86());
                }
                if (table5.getRevenuNetChambreGlobal87() != null) {
                    existingTable5.setRevenuNetChambreGlobal87(table5.getRevenuNetChambreGlobal87());
                }
                if (table5.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable5.setRevenuTaxeChambreGlobal88(table5.getRevenuTaxeChambreGlobal88());
                }
                if (table5.getRevenuNetBq89() != null) {
                    existingTable5.setRevenuNetBq89(table5.getRevenuNetBq89());
                }
                if (table5.getRevenuTaxeBq90() != null) {
                    existingTable5.setRevenuTaxeBq90(table5.getRevenuTaxeBq90());
                }
                if (table5.getRevenuNetBqGlobal91() != null) {
                    existingTable5.setRevenuNetBqGlobal91(table5.getRevenuNetBqGlobal91());
                }
                if (table5.getRevenuTaxeBqGlobal92() != null) {
                    existingTable5.setRevenuTaxeBqGlobal92(table5.getRevenuTaxeBqGlobal92());
                }
                if (table5.getRevenuNetExtra93() != null) {
                    existingTable5.setRevenuNetExtra93(table5.getRevenuNetExtra93());
                }
                if (table5.getRevenuTaxeExtra94() != null) {
                    existingTable5.setRevenuTaxeExtra94(table5.getRevenuTaxeExtra94());
                }
                if (table5.getRevenuNetExtraGlobal95() != null) {
                    existingTable5.setRevenuNetExtraGlobal95(table5.getRevenuNetExtraGlobal95());
                }
                if (table5.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable5.setRevenuTaxeExtraGlobal96(table5.getRevenuTaxeExtraGlobal96());
                }
                if (table5.getRevenuNetTotal97() != null) {
                    existingTable5.setRevenuNetTotal97(table5.getRevenuNetTotal97());
                }
                if (table5.getRevenuTaxeTotal98() != null) {
                    existingTable5.setRevenuTaxeTotal98(table5.getRevenuTaxeTotal98());
                }
                if (table5.getRevenuNetTotalGlobal99() != null) {
                    existingTable5.setRevenuNetTotalGlobal99(table5.getRevenuNetTotalGlobal99());
                }
                if (table5.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable5.setRevenuTaxeTotalGlobal100(table5.getRevenuTaxeTotalGlobal100());
                }
                if (table5.getProdRevenuChambre101() != null) {
                    existingTable5.setProdRevenuChambre101(table5.getProdRevenuChambre101());
                }
                if (table5.getProdRevenuBq102() != null) {
                    existingTable5.setProdRevenuBq102(table5.getProdRevenuBq102());
                }
                if (table5.getProdRevenuExtra103() != null) {
                    existingTable5.setProdRevenuExtra103(table5.getProdRevenuExtra103());
                }
                if (table5.getProdRevenuTotal104() != null) {
                    existingTable5.setProdRevenuTotal104(table5.getProdRevenuTotal104());
                }
                if (table5.getProdChambreNbNuitees105() != null) {
                    existingTable5.setProdChambreNbNuitees105(table5.getProdChambreNbNuitees105());
                }
                if (table5.getTechCreateDate106() != null) {
                    existingTable5.setTechCreateDate106(table5.getTechCreateDate106());
                }
                if (table5.getTechUpdateDate107() != null) {
                    existingTable5.setTechUpdateDate107(table5.getTechUpdateDate107());
                }
                if (table5.getNumLigne108() != null) {
                    existingTable5.setNumLigne108(table5.getNumLigne108());
                }
                if (table5.getResort109() != null) {
                    existingTable5.setResort109(table5.getResort109());
                }
                if (table5.getResvNameId110() != null) {
                    existingTable5.setResvNameId110(table5.getResvNameId110());
                }
                if (table5.getClientOId111() != null) {
                    existingTable5.setClientOId111(table5.getClientOId111());
                }
                if (table5.getTypeChb112() != null) {
                    existingTable5.setTypeChb112(table5.getTypeChb112());
                }
                if (table5.getConfirmationNo113() != null) {
                    existingTable5.setConfirmationNo113(table5.getConfirmationNo113());
                }
                if (table5.getClientMdmId114() != null) {
                    existingTable5.setClientMdmId114(table5.getClientMdmId114());
                }
                if (table5.getNameId115() != null) {
                    existingTable5.setNameId115(table5.getNameId115());
                }
                if (table5.getParentResvNameId116() != null) {
                    existingTable5.setParentResvNameId116(table5.getParentResvNameId116());
                }
                if (table5.getContactId117() != null) {
                    existingTable5.setContactId117(table5.getContactId117());
                }
                if (table5.getAgenceId118() != null) {
                    existingTable5.setAgenceId118(table5.getAgenceId118());
                }
                if (table5.getAgenceNom119() != null) {
                    existingTable5.setAgenceNom119(table5.getAgenceNom119());
                }
                if (table5.getSocieteId120() != null) {
                    existingTable5.setSocieteId120(table5.getSocieteId120());
                }
                if (table5.getGroupeId121() != null) {
                    existingTable5.setGroupeId121(table5.getGroupeId121());
                }
                if (table5.getNumBloc122() != null) {
                    existingTable5.setNumBloc122(table5.getNumBloc122());
                }
                if (table5.getTypeResv123() != null) {
                    existingTable5.setTypeResv123(table5.getTypeResv123());
                }
                if (table5.getStatutResv124() != null) {
                    existingTable5.setStatutResv124(table5.getStatutResv124());
                }
                if (table5.getDateDebutResv125() != null) {
                    existingTable5.setDateDebutResv125(table5.getDateDebutResv125());
                }
                if (table5.getDateFinResv126() != null) {
                    existingTable5.setDateFinResv126(table5.getDateFinResv126());
                }
                if (table5.getTruncDateDebutResv127() != null) {
                    existingTable5.setTruncDateDebutResv127(table5.getTruncDateDebutResv127());
                }
                if (table5.getTruncDateFinResv128() != null) {
                    existingTable5.setTruncDateFinResv128(table5.getTruncDateFinResv128());
                }
                if (table5.getDateAnnResv129() != null) {
                    existingTable5.setDateAnnResv129(table5.getDateAnnResv129());
                }
                if (table5.getPseudoRoomYn130() != null) {
                    existingTable5.setPseudoRoomYn130(table5.getPseudoRoomYn130());
                }
                if (table5.getCreateurResv131() != null) {
                    existingTable5.setCreateurResv131(table5.getCreateurResv131());
                }
                if (table5.getNomCreateurResv132() != null) {
                    existingTable5.setNomCreateurResv132(table5.getNomCreateurResv132());
                }
                if (table5.getCodeGarantie133() != null) {
                    existingTable5.setCodeGarantie133(table5.getCodeGarantie133());
                }
                if (table5.getFlgDed134() != null) {
                    existingTable5.setFlgDed134(table5.getFlgDed134());
                }
                if (table5.getCodePays135() != null) {
                    existingTable5.setCodePays135(table5.getCodePays135());
                }
                if (table5.getLibPays136() != null) {
                    existingTable5.setLibPays136(table5.getLibPays136());
                }
                if (table5.getCodeNationalite137() != null) {
                    existingTable5.setCodeNationalite137(table5.getCodeNationalite137());
                }
                if (table5.getLibNationalite138() != null) {
                    existingTable5.setLibNationalite138(table5.getLibNationalite138());
                }
                if (table5.getCodeSource139() != null) {
                    existingTable5.setCodeSource139(table5.getCodeSource139());
                }
                if (table5.getLibSource140() != null) {
                    existingTable5.setLibSource140(table5.getLibSource140());
                }
                if (table5.getCodeGrandSource141() != null) {
                    existingTable5.setCodeGrandSource141(table5.getCodeGrandSource141());
                }
                if (table5.getCodeOrigine142() != null) {
                    existingTable5.setCodeOrigine142(table5.getCodeOrigine142());
                }
                if (table5.getLibOrigine143() != null) {
                    existingTable5.setLibOrigine143(table5.getLibOrigine143());
                }
                if (table5.getCodeMarche144() != null) {
                    existingTable5.setCodeMarche144(table5.getCodeMarche144());
                }
                if (table5.getLibMarche145() != null) {
                    existingTable5.setLibMarche145(table5.getLibMarche145());
                }
                if (table5.getCodeGrandMarche146() != null) {
                    existingTable5.setCodeGrandMarche146(table5.getCodeGrandMarche146());
                }
                if (table5.getLibGrandMarche147() != null) {
                    existingTable5.setLibGrandMarche147(table5.getLibGrandMarche147());
                }
                if (table5.getCodePrix148() != null) {
                    existingTable5.setCodePrix148(table5.getCodePrix148());
                }
                if (table5.getCategPrix149() != null) {
                    existingTable5.setCategPrix149(table5.getCategPrix149());
                }
                if (table5.getLibPrix150() != null) {
                    existingTable5.setLibPrix150(table5.getLibPrix150());
                }
                if (table5.getNumChb151() != null) {
                    existingTable5.setNumChb151(table5.getNumChb151());
                }
                if (table5.getDescriptionTypeChb152() != null) {
                    existingTable5.setDescriptionTypeChb152(table5.getDescriptionTypeChb152());
                }
                if (table5.getCodeTypeChb153() != null) {
                    existingTable5.setCodeTypeChb153(table5.getCodeTypeChb153());
                }
                if (table5.getClassChb154() != null) {
                    existingTable5.setClassChb154(table5.getClassChb154());
                }
                if (table5.getCaractChb155() != null) {
                    existingTable5.setCaractChb155(table5.getCaractChb155());
                }
                if (table5.getTypeChbDeReservation156() != null) {
                    existingTable5.setTypeChbDeReservation156(table5.getTypeChbDeReservation156());
                }
                if (table5.getDescriptionTypeChbDeResv157() != null) {
                    existingTable5.setDescriptionTypeChbDeResv157(table5.getDescriptionTypeChbDeResv157());
                }
                if (table5.getCodeTypeChbDeResv158() != null) {
                    existingTable5.setCodeTypeChbDeResv158(table5.getCodeTypeChbDeResv158());
                }
                if (table5.getStatutDeReservation159() != null) {
                    existingTable5.setStatutDeReservation159(table5.getStatutDeReservation159());
                }
                if (table5.getCircuitDistribution160() != null) {
                    existingTable5.setCircuitDistribution160(table5.getCircuitDistribution160());
                }
                if (table5.getCircuitDistribUserRegroup161() != null) {
                    existingTable5.setCircuitDistribUserRegroup161(table5.getCircuitDistribUserRegroup161());
                }
                if (table5.getNumCrs162() != null) {
                    existingTable5.setNumCrs162(table5.getNumCrs162());
                }
                if (table5.getTypeRefCrs163() != null) {
                    existingTable5.setTypeRefCrs163(table5.getTypeRefCrs163());
                }
                if (table5.getCrsInsertDate164() != null) {
                    existingTable5.setCrsInsertDate164(table5.getCrsInsertDate164());
                }
                if (table5.getDateCreaResv165() != null) {
                    existingTable5.setDateCreaResv165(table5.getDateCreaResv165());
                }
                if (table5.getDatePremier166() != null) {
                    existingTable5.setDatePremier166(table5.getDatePremier166());
                }
                if (table5.getStatutPremier167() != null) {
                    existingTable5.setStatutPremier167(table5.getStatutPremier167());
                }
                if (table5.getDateDernier168() != null) {
                    existingTable5.setDateDernier168(table5.getDateDernier168());
                }
                if (table5.getStatutDernier169() != null) {
                    existingTable5.setStatutDernier169(table5.getStatutDernier169());
                }
                if (table5.getDateDernierPseudo170() != null) {
                    existingTable5.setDateDernierPseudo170(table5.getDateDernierPseudo170());
                }
                if (table5.getStatutDernierPseudo171() != null) {
                    existingTable5.setStatutDernierPseudo171(table5.getStatutDernierPseudo171());
                }
                if (table5.getDiffDtCreaAnn172() != null) {
                    existingTable5.setDiffDtCreaAnn172(table5.getDiffDtCreaAnn172());
                }
                if (table5.getDiffDtArrAnn173() != null) {
                    existingTable5.setDiffDtArrAnn173(table5.getDiffDtArrAnn173());
                }
                if (table5.getLeadtime174() != null) {
                    existingTable5.setLeadtime174(table5.getLeadtime174());
                }
                if (table5.getLos175() != null) {
                    existingTable5.setLos175(table5.getLos175());
                }
                if (table5.getOccupantsGroupe176() != null) {
                    existingTable5.setOccupantsGroupe176(table5.getOccupantsGroupe176());
                }
                if (table5.getNbNuitee177() != null) {
                    existingTable5.setNbNuitee177(table5.getNbNuitee177());
                }
                if (table5.getNbNuiteeNnDed178() != null) {
                    existingTable5.setNbNuiteeNnDed178(table5.getNbNuiteeNnDed178());
                }
                if (table5.getNbResvAnn179() != null) {
                    existingTable5.setNbResvAnn179(table5.getNbResvAnn179());
                }
                if (table5.getNbAdu180() != null) {
                    existingTable5.setNbAdu180(table5.getNbAdu180());
                }
                if (table5.getNbEnf181() != null) {
                    existingTable5.setNbEnf181(table5.getNbEnf181());
                }
                if (table5.getNbPersDayU182() != null) {
                    existingTable5.setNbPersDayU182(table5.getNbPersDayU182());
                }
                if (table5.getNbPersArr183() != null) {
                    existingTable5.setNbPersArr183(table5.getNbPersArr183());
                }
                if (table5.getNbPersDep184() != null) {
                    existingTable5.setNbPersDep184(table5.getNbPersDep184());
                }
                if (table5.getNbPersAnn185() != null) {
                    existingTable5.setNbPersAnn185(table5.getNbPersAnn185());
                }
                if (table5.getNbPersNoshow186() != null) {
                    existingTable5.setNbPersNoshow186(table5.getNbPersNoshow186());
                }
                if (table5.getNbChbDayU187() != null) {
                    existingTable5.setNbChbDayU187(table5.getNbChbDayU187());
                }
                if (table5.getNbChbArr188() != null) {
                    existingTable5.setNbChbArr188(table5.getNbChbArr188());
                }
                if (table5.getNbChbDep189() != null) {
                    existingTable5.setNbChbDep189(table5.getNbChbDep189());
                }
                if (table5.getNbChbAnn190() != null) {
                    existingTable5.setNbChbAnn190(table5.getNbChbAnn190());
                }
                if (table5.getNbChbNoshow191() != null) {
                    existingTable5.setNbChbNoshow191(table5.getNbChbNoshow191());
                }
                if (table5.getRevenuNetChambre192() != null) {
                    existingTable5.setRevenuNetChambre192(table5.getRevenuNetChambre192());
                }
                if (table5.getRevenuTaxeChambre193() != null) {
                    existingTable5.setRevenuTaxeChambre193(table5.getRevenuTaxeChambre193());
                }
                if (table5.getRevenuNetChambreGlobal194() != null) {
                    existingTable5.setRevenuNetChambreGlobal194(table5.getRevenuNetChambreGlobal194());
                }
                if (table5.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable5.setRevenuTaxeChambreGlobal195(table5.getRevenuTaxeChambreGlobal195());
                }
                if (table5.getRevenuNetBq196() != null) {
                    existingTable5.setRevenuNetBq196(table5.getRevenuNetBq196());
                }
                if (table5.getRevenuTaxeBq197() != null) {
                    existingTable5.setRevenuTaxeBq197(table5.getRevenuTaxeBq197());
                }
                if (table5.getRevenuNetBqGlobal198() != null) {
                    existingTable5.setRevenuNetBqGlobal198(table5.getRevenuNetBqGlobal198());
                }
                if (table5.getRevenuTaxeBqGlobal199() != null) {
                    existingTable5.setRevenuTaxeBqGlobal199(table5.getRevenuTaxeBqGlobal199());
                }
                if (table5.getRevenuNetExtra200() != null) {
                    existingTable5.setRevenuNetExtra200(table5.getRevenuNetExtra200());
                }
                if (table5.getRevenuTaxeExtra201() != null) {
                    existingTable5.setRevenuTaxeExtra201(table5.getRevenuTaxeExtra201());
                }
                if (table5.getRevenuNetExtraGlobal202() != null) {
                    existingTable5.setRevenuNetExtraGlobal202(table5.getRevenuNetExtraGlobal202());
                }
                if (table5.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable5.setRevenuTaxeExtraGlobal203(table5.getRevenuTaxeExtraGlobal203());
                }
                if (table5.getRevenuNetTotal204() != null) {
                    existingTable5.setRevenuNetTotal204(table5.getRevenuNetTotal204());
                }
                if (table5.getRevenuTaxeTotal205() != null) {
                    existingTable5.setRevenuTaxeTotal205(table5.getRevenuTaxeTotal205());
                }
                if (table5.getRevenuNetTotalGlobal206() != null) {
                    existingTable5.setRevenuNetTotalGlobal206(table5.getRevenuNetTotalGlobal206());
                }
                if (table5.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable5.setRevenuTaxeTotalGlobal207(table5.getRevenuTaxeTotalGlobal207());
                }
                if (table5.getProdRevenuChambre208() != null) {
                    existingTable5.setProdRevenuChambre208(table5.getProdRevenuChambre208());
                }
                if (table5.getProdRevenuBq209() != null) {
                    existingTable5.setProdRevenuBq209(table5.getProdRevenuBq209());
                }
                if (table5.getProdRevenuExtra210() != null) {
                    existingTable5.setProdRevenuExtra210(table5.getProdRevenuExtra210());
                }
                if (table5.getProdRevenuTotal211() != null) {
                    existingTable5.setProdRevenuTotal211(table5.getProdRevenuTotal211());
                }
                if (table5.getProdChambreNbNuitees212() != null) {
                    existingTable5.setProdChambreNbNuitees212(table5.getProdChambreNbNuitees212());
                }
                if (table5.getTechCreateDate213() != null) {
                    existingTable5.setTechCreateDate213(table5.getTechCreateDate213());
                }
                if (table5.getTechUpdateDate214() != null) {
                    existingTable5.setTechUpdateDate214(table5.getTechUpdateDate214());
                }
                if (table5.getNumLigne215() != null) {
                    existingTable5.setNumLigne215(table5.getNumLigne215());
                }
                if (table5.getResort216() != null) {
                    existingTable5.setResort216(table5.getResort216());
                }
                if (table5.getResvNameId217() != null) {
                    existingTable5.setResvNameId217(table5.getResvNameId217());
                }
                if (table5.getClientOId218() != null) {
                    existingTable5.setClientOId218(table5.getClientOId218());
                }
                if (table5.getTypeChb219() != null) {
                    existingTable5.setTypeChb219(table5.getTypeChb219());
                }
                if (table5.getConfirmationNo220() != null) {
                    existingTable5.setConfirmationNo220(table5.getConfirmationNo220());
                }
                if (table5.getClientMdmId221() != null) {
                    existingTable5.setClientMdmId221(table5.getClientMdmId221());
                }
                if (table5.getNameId222() != null) {
                    existingTable5.setNameId222(table5.getNameId222());
                }
                if (table5.getParentResvNameId223() != null) {
                    existingTable5.setParentResvNameId223(table5.getParentResvNameId223());
                }
                if (table5.getContactId224() != null) {
                    existingTable5.setContactId224(table5.getContactId224());
                }
                if (table5.getAgenceId225() != null) {
                    existingTable5.setAgenceId225(table5.getAgenceId225());
                }
                if (table5.getAgenceNom226() != null) {
                    existingTable5.setAgenceNom226(table5.getAgenceNom226());
                }
                if (table5.getSocieteId227() != null) {
                    existingTable5.setSocieteId227(table5.getSocieteId227());
                }
                if (table5.getGroupeId228() != null) {
                    existingTable5.setGroupeId228(table5.getGroupeId228());
                }
                if (table5.getNumBloc229() != null) {
                    existingTable5.setNumBloc229(table5.getNumBloc229());
                }
                if (table5.getTypeResv230() != null) {
                    existingTable5.setTypeResv230(table5.getTypeResv230());
                }
                if (table5.getStatutResv231() != null) {
                    existingTable5.setStatutResv231(table5.getStatutResv231());
                }
                if (table5.getDateDebutResv232() != null) {
                    existingTable5.setDateDebutResv232(table5.getDateDebutResv232());
                }
                if (table5.getDateFinResv233() != null) {
                    existingTable5.setDateFinResv233(table5.getDateFinResv233());
                }
                if (table5.getTruncDateDebutResv234() != null) {
                    existingTable5.setTruncDateDebutResv234(table5.getTruncDateDebutResv234());
                }
                if (table5.getTruncDateFinResv235() != null) {
                    existingTable5.setTruncDateFinResv235(table5.getTruncDateFinResv235());
                }
                if (table5.getDateAnnResv236() != null) {
                    existingTable5.setDateAnnResv236(table5.getDateAnnResv236());
                }
                if (table5.getPseudoRoomYn237() != null) {
                    existingTable5.setPseudoRoomYn237(table5.getPseudoRoomYn237());
                }
                if (table5.getCreateurResv238() != null) {
                    existingTable5.setCreateurResv238(table5.getCreateurResv238());
                }
                if (table5.getNomCreateurResv239() != null) {
                    existingTable5.setNomCreateurResv239(table5.getNomCreateurResv239());
                }
                if (table5.getCodeGarantie240() != null) {
                    existingTable5.setCodeGarantie240(table5.getCodeGarantie240());
                }
                if (table5.getFlgDed241() != null) {
                    existingTable5.setFlgDed241(table5.getFlgDed241());
                }
                if (table5.getCodePays242() != null) {
                    existingTable5.setCodePays242(table5.getCodePays242());
                }
                if (table5.getLibPays243() != null) {
                    existingTable5.setLibPays243(table5.getLibPays243());
                }
                if (table5.getCodeNationalite244() != null) {
                    existingTable5.setCodeNationalite244(table5.getCodeNationalite244());
                }
                if (table5.getLibNationalite245() != null) {
                    existingTable5.setLibNationalite245(table5.getLibNationalite245());
                }
                if (table5.getCodeSource246() != null) {
                    existingTable5.setCodeSource246(table5.getCodeSource246());
                }
                if (table5.getLibSource247() != null) {
                    existingTable5.setLibSource247(table5.getLibSource247());
                }
                if (table5.getCodeGrandSource248() != null) {
                    existingTable5.setCodeGrandSource248(table5.getCodeGrandSource248());
                }
                if (table5.getCodeOrigine249() != null) {
                    existingTable5.setCodeOrigine249(table5.getCodeOrigine249());
                }
                if (table5.getLibOrigine250() != null) {
                    existingTable5.setLibOrigine250(table5.getLibOrigine250());
                }
                if (table5.getCodeMarche251() != null) {
                    existingTable5.setCodeMarche251(table5.getCodeMarche251());
                }
                if (table5.getLibMarche252() != null) {
                    existingTable5.setLibMarche252(table5.getLibMarche252());
                }
                if (table5.getCodeGrandMarche253() != null) {
                    existingTable5.setCodeGrandMarche253(table5.getCodeGrandMarche253());
                }
                if (table5.getLibGrandMarche254() != null) {
                    existingTable5.setLibGrandMarche254(table5.getLibGrandMarche254());
                }
                if (table5.getCodePrix255() != null) {
                    existingTable5.setCodePrix255(table5.getCodePrix255());
                }
                if (table5.getCategPrix256() != null) {
                    existingTable5.setCategPrix256(table5.getCategPrix256());
                }
                if (table5.getLibPrix257() != null) {
                    existingTable5.setLibPrix257(table5.getLibPrix257());
                }
                if (table5.getNumChb258() != null) {
                    existingTable5.setNumChb258(table5.getNumChb258());
                }
                if (table5.getDescriptionTypeChb259() != null) {
                    existingTable5.setDescriptionTypeChb259(table5.getDescriptionTypeChb259());
                }
                if (table5.getCodeTypeChb260() != null) {
                    existingTable5.setCodeTypeChb260(table5.getCodeTypeChb260());
                }
                if (table5.getClassChb261() != null) {
                    existingTable5.setClassChb261(table5.getClassChb261());
                }
                if (table5.getCaractChb262() != null) {
                    existingTable5.setCaractChb262(table5.getCaractChb262());
                }
                if (table5.getTypeChbDeReservation263() != null) {
                    existingTable5.setTypeChbDeReservation263(table5.getTypeChbDeReservation263());
                }
                if (table5.getDescriptionTypeChbDeResv264() != null) {
                    existingTable5.setDescriptionTypeChbDeResv264(table5.getDescriptionTypeChbDeResv264());
                }
                if (table5.getCodeTypeChbDeResv265() != null) {
                    existingTable5.setCodeTypeChbDeResv265(table5.getCodeTypeChbDeResv265());
                }
                if (table5.getStatutDeReservation266() != null) {
                    existingTable5.setStatutDeReservation266(table5.getStatutDeReservation266());
                }
                if (table5.getCircuitDistribution267() != null) {
                    existingTable5.setCircuitDistribution267(table5.getCircuitDistribution267());
                }
                if (table5.getCircuitDistribUserRegroup268() != null) {
                    existingTable5.setCircuitDistribUserRegroup268(table5.getCircuitDistribUserRegroup268());
                }
                if (table5.getNumCrs269() != null) {
                    existingTable5.setNumCrs269(table5.getNumCrs269());
                }
                if (table5.getTypeRefCrs270() != null) {
                    existingTable5.setTypeRefCrs270(table5.getTypeRefCrs270());
                }
                if (table5.getCrsInsertDate271() != null) {
                    existingTable5.setCrsInsertDate271(table5.getCrsInsertDate271());
                }
                if (table5.getDateCreaResv272() != null) {
                    existingTable5.setDateCreaResv272(table5.getDateCreaResv272());
                }
                if (table5.getDatePremier273() != null) {
                    existingTable5.setDatePremier273(table5.getDatePremier273());
                }
                if (table5.getStatutPremier274() != null) {
                    existingTable5.setStatutPremier274(table5.getStatutPremier274());
                }
                if (table5.getDateDernier275() != null) {
                    existingTable5.setDateDernier275(table5.getDateDernier275());
                }
                if (table5.getStatutDernier276() != null) {
                    existingTable5.setStatutDernier276(table5.getStatutDernier276());
                }
                if (table5.getDateDernierPseudo277() != null) {
                    existingTable5.setDateDernierPseudo277(table5.getDateDernierPseudo277());
                }
                if (table5.getStatutDernierPseudo278() != null) {
                    existingTable5.setStatutDernierPseudo278(table5.getStatutDernierPseudo278());
                }
                if (table5.getDiffDtCreaAnn279() != null) {
                    existingTable5.setDiffDtCreaAnn279(table5.getDiffDtCreaAnn279());
                }
                if (table5.getDiffDtArrAnn280() != null) {
                    existingTable5.setDiffDtArrAnn280(table5.getDiffDtArrAnn280());
                }
                if (table5.getLeadtime281() != null) {
                    existingTable5.setLeadtime281(table5.getLeadtime281());
                }
                if (table5.getLos282() != null) {
                    existingTable5.setLos282(table5.getLos282());
                }
                if (table5.getOccupantsGroupe283() != null) {
                    existingTable5.setOccupantsGroupe283(table5.getOccupantsGroupe283());
                }
                if (table5.getNbNuitee284() != null) {
                    existingTable5.setNbNuitee284(table5.getNbNuitee284());
                }
                if (table5.getNbNuiteeNnDed285() != null) {
                    existingTable5.setNbNuiteeNnDed285(table5.getNbNuiteeNnDed285());
                }
                if (table5.getNbResvAnn286() != null) {
                    existingTable5.setNbResvAnn286(table5.getNbResvAnn286());
                }
                if (table5.getNbAdu287() != null) {
                    existingTable5.setNbAdu287(table5.getNbAdu287());
                }
                if (table5.getNbEnf288() != null) {
                    existingTable5.setNbEnf288(table5.getNbEnf288());
                }
                if (table5.getNbPersDayU289() != null) {
                    existingTable5.setNbPersDayU289(table5.getNbPersDayU289());
                }
                if (table5.getNbPersArr290() != null) {
                    existingTable5.setNbPersArr290(table5.getNbPersArr290());
                }
                if (table5.getNbPersDep291() != null) {
                    existingTable5.setNbPersDep291(table5.getNbPersDep291());
                }
                if (table5.getNbPersAnn292() != null) {
                    existingTable5.setNbPersAnn292(table5.getNbPersAnn292());
                }
                if (table5.getNbPersNoshow293() != null) {
                    existingTable5.setNbPersNoshow293(table5.getNbPersNoshow293());
                }
                if (table5.getNbChbDayU294() != null) {
                    existingTable5.setNbChbDayU294(table5.getNbChbDayU294());
                }
                if (table5.getNbChbArr295() != null) {
                    existingTable5.setNbChbArr295(table5.getNbChbArr295());
                }
                if (table5.getNbChbDep296() != null) {
                    existingTable5.setNbChbDep296(table5.getNbChbDep296());
                }
                if (table5.getNbChbAnn297() != null) {
                    existingTable5.setNbChbAnn297(table5.getNbChbAnn297());
                }
                if (table5.getNbChbNoshow298() != null) {
                    existingTable5.setNbChbNoshow298(table5.getNbChbNoshow298());
                }
                if (table5.getRevenuNetChambre299() != null) {
                    existingTable5.setRevenuNetChambre299(table5.getRevenuNetChambre299());
                }
                if (table5.getRevenuTaxeChambre300() != null) {
                    existingTable5.setRevenuTaxeChambre300(table5.getRevenuTaxeChambre300());
                }
                if (table5.getRevenuNetChambreGlobal301() != null) {
                    existingTable5.setRevenuNetChambreGlobal301(table5.getRevenuNetChambreGlobal301());
                }
                if (table5.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable5.setRevenuTaxeChambreGlobal302(table5.getRevenuTaxeChambreGlobal302());
                }
                if (table5.getRevenuNetBq303() != null) {
                    existingTable5.setRevenuNetBq303(table5.getRevenuNetBq303());
                }
                if (table5.getRevenuTaxeBq304() != null) {
                    existingTable5.setRevenuTaxeBq304(table5.getRevenuTaxeBq304());
                }
                if (table5.getRevenuNetBqGlobal305() != null) {
                    existingTable5.setRevenuNetBqGlobal305(table5.getRevenuNetBqGlobal305());
                }
                if (table5.getRevenuTaxeBqGlobal306() != null) {
                    existingTable5.setRevenuTaxeBqGlobal306(table5.getRevenuTaxeBqGlobal306());
                }
                if (table5.getRevenuNetExtra307() != null) {
                    existingTable5.setRevenuNetExtra307(table5.getRevenuNetExtra307());
                }
                if (table5.getRevenuTaxeExtra308() != null) {
                    existingTable5.setRevenuTaxeExtra308(table5.getRevenuTaxeExtra308());
                }
                if (table5.getRevenuNetExtraGlobal309() != null) {
                    existingTable5.setRevenuNetExtraGlobal309(table5.getRevenuNetExtraGlobal309());
                }
                if (table5.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable5.setRevenuTaxeExtraGlobal310(table5.getRevenuTaxeExtraGlobal310());
                }

                return existingTable5;
            })
            .map(table5Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table5.getId().toString())
        );
    }

    /**
     * {@code GET  /table-5-s} : get all the table5s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table5s in body.
     */
    @GetMapping("")
    public List<Table5> getAllTable5s() {
        log.debug("REST request to get all Table5s");
        return table5Repository.findAll();
    }

    /**
     * {@code GET  /table-5-s/:id} : get the "id" table5.
     *
     * @param id the id of the table5 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table5, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table5> getTable5(@PathVariable("id") Long id) {
        log.debug("REST request to get Table5 : {}", id);
        Optional<Table5> table5 = table5Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table5);
    }

    /**
     * {@code DELETE  /table-5-s/:id} : delete the "id" table5.
     *
     * @param id the id of the table5 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable5(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table5 : {}", id);
        table5Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
