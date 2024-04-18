import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable3, NewTable3 } from '../table-3.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable3 for edit and NewTable3FormGroupInput for create.
 */
type Table3FormGroupInput = ITable3 | PartialWithRequiredKeyOf<NewTable3>;

type Table3FormDefaults = Pick<NewTable3, 'id'>;

type Table3FormGroupContent = {
  id: FormControl<ITable3['id'] | NewTable3['id']>;
  numLigne1: FormControl<ITable3['numLigne1']>;
  resort2: FormControl<ITable3['resort2']>;
  resvNameId3: FormControl<ITable3['resvNameId3']>;
  clientOId4: FormControl<ITable3['clientOId4']>;
  typeChb5: FormControl<ITable3['typeChb5']>;
  confirmationNo6: FormControl<ITable3['confirmationNo6']>;
  clientMdmId7: FormControl<ITable3['clientMdmId7']>;
  nameId8: FormControl<ITable3['nameId8']>;
  parentResvNameId9: FormControl<ITable3['parentResvNameId9']>;
  contactId10: FormControl<ITable3['contactId10']>;
  agenceId11: FormControl<ITable3['agenceId11']>;
  agenceNom12: FormControl<ITable3['agenceNom12']>;
  societeId13: FormControl<ITable3['societeId13']>;
  groupeId14: FormControl<ITable3['groupeId14']>;
  numBloc15: FormControl<ITable3['numBloc15']>;
  typeResv16: FormControl<ITable3['typeResv16']>;
  statutResv17: FormControl<ITable3['statutResv17']>;
  dateDebutResv18: FormControl<ITable3['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable3['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable3['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable3['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable3['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable3['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable3['createurResv24']>;
  nomCreateurResv25: FormControl<ITable3['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable3['codeGarantie26']>;
  flgDed27: FormControl<ITable3['flgDed27']>;
  codePays28: FormControl<ITable3['codePays28']>;
  libPays29: FormControl<ITable3['libPays29']>;
  codeNationalite30: FormControl<ITable3['codeNationalite30']>;
  libNationalite31: FormControl<ITable3['libNationalite31']>;
  codeSource32: FormControl<ITable3['codeSource32']>;
  libSource33: FormControl<ITable3['libSource33']>;
  codeGrandSource34: FormControl<ITable3['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable3['codeOrigine35']>;
  libOrigine36: FormControl<ITable3['libOrigine36']>;
  codeMarche37: FormControl<ITable3['codeMarche37']>;
  libMarche38: FormControl<ITable3['libMarche38']>;
  codeGrandMarche39: FormControl<ITable3['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable3['libGrandMarche40']>;
  codePrix41: FormControl<ITable3['codePrix41']>;
  categPrix42: FormControl<ITable3['categPrix42']>;
  libPrix43: FormControl<ITable3['libPrix43']>;
  numChb44: FormControl<ITable3['numChb44']>;
  descriptionTypeChb45: FormControl<ITable3['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable3['codeTypeChb46']>;
  classChb47: FormControl<ITable3['classChb47']>;
  caractChb48: FormControl<ITable3['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable3['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable3['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable3['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable3['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable3['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable3['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable3['numCrs55']>;
  typeRefCrs56: FormControl<ITable3['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable3['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable3['dateCreaResv58']>;
  datePremier59: FormControl<ITable3['datePremier59']>;
  statutPremier60: FormControl<ITable3['statutPremier60']>;
  dateDernier61: FormControl<ITable3['dateDernier61']>;
  statutDernier62: FormControl<ITable3['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable3['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable3['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable3['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable3['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable3['leadtime67']>;
  los68: FormControl<ITable3['los68']>;
  occupantsGroupe69: FormControl<ITable3['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable3['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable3['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable3['nbResvAnn72']>;
  nbAdu73: FormControl<ITable3['nbAdu73']>;
  nbEnf74: FormControl<ITable3['nbEnf74']>;
  nbPersDayU75: FormControl<ITable3['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable3['nbPersArr76']>;
  nbPersDep77: FormControl<ITable3['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable3['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable3['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable3['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable3['nbChbArr81']>;
  nbChbDep82: FormControl<ITable3['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable3['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable3['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable3['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable3['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable3['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable3['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable3['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable3['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable3['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable3['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable3['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable3['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable3['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable3['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable3['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable3['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable3['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable3['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable3['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable3['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable3['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable3['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable3['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable3['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable3['techUpdateDate107']>;
  numLigne108: FormControl<ITable3['numLigne108']>;
  resort109: FormControl<ITable3['resort109']>;
  resvNameId110: FormControl<ITable3['resvNameId110']>;
  clientOId111: FormControl<ITable3['clientOId111']>;
  typeChb112: FormControl<ITable3['typeChb112']>;
  confirmationNo113: FormControl<ITable3['confirmationNo113']>;
  clientMdmId114: FormControl<ITable3['clientMdmId114']>;
  nameId115: FormControl<ITable3['nameId115']>;
  parentResvNameId116: FormControl<ITable3['parentResvNameId116']>;
  contactId117: FormControl<ITable3['contactId117']>;
  agenceId118: FormControl<ITable3['agenceId118']>;
  agenceNom119: FormControl<ITable3['agenceNom119']>;
  societeId120: FormControl<ITable3['societeId120']>;
  groupeId121: FormControl<ITable3['groupeId121']>;
  numBloc122: FormControl<ITable3['numBloc122']>;
  typeResv123: FormControl<ITable3['typeResv123']>;
  statutResv124: FormControl<ITable3['statutResv124']>;
  dateDebutResv125: FormControl<ITable3['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable3['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable3['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable3['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable3['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable3['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable3['createurResv131']>;
  nomCreateurResv132: FormControl<ITable3['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable3['codeGarantie133']>;
  flgDed134: FormControl<ITable3['flgDed134']>;
  codePays135: FormControl<ITable3['codePays135']>;
  libPays136: FormControl<ITable3['libPays136']>;
  codeNationalite137: FormControl<ITable3['codeNationalite137']>;
  libNationalite138: FormControl<ITable3['libNationalite138']>;
  codeSource139: FormControl<ITable3['codeSource139']>;
  libSource140: FormControl<ITable3['libSource140']>;
  codeGrandSource141: FormControl<ITable3['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable3['codeOrigine142']>;
  libOrigine143: FormControl<ITable3['libOrigine143']>;
  codeMarche144: FormControl<ITable3['codeMarche144']>;
  libMarche145: FormControl<ITable3['libMarche145']>;
  codeGrandMarche146: FormControl<ITable3['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable3['libGrandMarche147']>;
  codePrix148: FormControl<ITable3['codePrix148']>;
  categPrix149: FormControl<ITable3['categPrix149']>;
  libPrix150: FormControl<ITable3['libPrix150']>;
  numChb151: FormControl<ITable3['numChb151']>;
  descriptionTypeChb152: FormControl<ITable3['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable3['codeTypeChb153']>;
  classChb154: FormControl<ITable3['classChb154']>;
  caractChb155: FormControl<ITable3['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable3['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable3['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable3['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable3['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable3['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable3['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable3['numCrs162']>;
  typeRefCrs163: FormControl<ITable3['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable3['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable3['dateCreaResv165']>;
  datePremier166: FormControl<ITable3['datePremier166']>;
  statutPremier167: FormControl<ITable3['statutPremier167']>;
  dateDernier168: FormControl<ITable3['dateDernier168']>;
  statutDernier169: FormControl<ITable3['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable3['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable3['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable3['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable3['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable3['leadtime174']>;
  los175: FormControl<ITable3['los175']>;
  occupantsGroupe176: FormControl<ITable3['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable3['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable3['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable3['nbResvAnn179']>;
  nbAdu180: FormControl<ITable3['nbAdu180']>;
  nbEnf181: FormControl<ITable3['nbEnf181']>;
  nbPersDayU182: FormControl<ITable3['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable3['nbPersArr183']>;
  nbPersDep184: FormControl<ITable3['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable3['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable3['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable3['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable3['nbChbArr188']>;
  nbChbDep189: FormControl<ITable3['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable3['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable3['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable3['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable3['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable3['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable3['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable3['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable3['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable3['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable3['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable3['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable3['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable3['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable3['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable3['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable3['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable3['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable3['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable3['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable3['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable3['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable3['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable3['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable3['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable3['techUpdateDate214']>;
  numLigne215: FormControl<ITable3['numLigne215']>;
  resort216: FormControl<ITable3['resort216']>;
  resvNameId217: FormControl<ITable3['resvNameId217']>;
  clientOId218: FormControl<ITable3['clientOId218']>;
  typeChb219: FormControl<ITable3['typeChb219']>;
  confirmationNo220: FormControl<ITable3['confirmationNo220']>;
  clientMdmId221: FormControl<ITable3['clientMdmId221']>;
  nameId222: FormControl<ITable3['nameId222']>;
  parentResvNameId223: FormControl<ITable3['parentResvNameId223']>;
  contactId224: FormControl<ITable3['contactId224']>;
  agenceId225: FormControl<ITable3['agenceId225']>;
  agenceNom226: FormControl<ITable3['agenceNom226']>;
  societeId227: FormControl<ITable3['societeId227']>;
  groupeId228: FormControl<ITable3['groupeId228']>;
  numBloc229: FormControl<ITable3['numBloc229']>;
  typeResv230: FormControl<ITable3['typeResv230']>;
  statutResv231: FormControl<ITable3['statutResv231']>;
  dateDebutResv232: FormControl<ITable3['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable3['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable3['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable3['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable3['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable3['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable3['createurResv238']>;
  nomCreateurResv239: FormControl<ITable3['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable3['codeGarantie240']>;
  flgDed241: FormControl<ITable3['flgDed241']>;
  codePays242: FormControl<ITable3['codePays242']>;
  libPays243: FormControl<ITable3['libPays243']>;
  codeNationalite244: FormControl<ITable3['codeNationalite244']>;
  libNationalite245: FormControl<ITable3['libNationalite245']>;
  codeSource246: FormControl<ITable3['codeSource246']>;
  libSource247: FormControl<ITable3['libSource247']>;
  codeGrandSource248: FormControl<ITable3['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable3['codeOrigine249']>;
  libOrigine250: FormControl<ITable3['libOrigine250']>;
  codeMarche251: FormControl<ITable3['codeMarche251']>;
  libMarche252: FormControl<ITable3['libMarche252']>;
  codeGrandMarche253: FormControl<ITable3['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable3['libGrandMarche254']>;
  codePrix255: FormControl<ITable3['codePrix255']>;
  categPrix256: FormControl<ITable3['categPrix256']>;
  libPrix257: FormControl<ITable3['libPrix257']>;
  numChb258: FormControl<ITable3['numChb258']>;
  descriptionTypeChb259: FormControl<ITable3['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable3['codeTypeChb260']>;
  classChb261: FormControl<ITable3['classChb261']>;
  caractChb262: FormControl<ITable3['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable3['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable3['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable3['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable3['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable3['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable3['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable3['numCrs269']>;
  typeRefCrs270: FormControl<ITable3['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable3['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable3['dateCreaResv272']>;
  datePremier273: FormControl<ITable3['datePremier273']>;
  statutPremier274: FormControl<ITable3['statutPremier274']>;
  dateDernier275: FormControl<ITable3['dateDernier275']>;
  statutDernier276: FormControl<ITable3['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable3['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable3['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable3['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable3['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable3['leadtime281']>;
  los282: FormControl<ITable3['los282']>;
  occupantsGroupe283: FormControl<ITable3['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable3['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable3['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable3['nbResvAnn286']>;
  nbAdu287: FormControl<ITable3['nbAdu287']>;
  nbEnf288: FormControl<ITable3['nbEnf288']>;
  nbPersDayU289: FormControl<ITable3['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable3['nbPersArr290']>;
  nbPersDep291: FormControl<ITable3['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable3['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable3['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable3['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable3['nbChbArr295']>;
  nbChbDep296: FormControl<ITable3['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable3['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable3['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable3['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable3['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable3['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable3['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable3['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable3['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable3['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable3['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable3['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable3['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable3['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable3['revenuTaxeExtraGlobal310']>;
};

export type Table3FormGroup = FormGroup<Table3FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table3FormService {
  createTable3FormGroup(table3: Table3FormGroupInput = { id: null }): Table3FormGroup {
    const table3RawValue = {
      ...this.getFormDefaults(),
      ...table3,
    };
    return new FormGroup<Table3FormGroupContent>({
      id: new FormControl(
        { value: table3RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table3RawValue.numLigne1),
      resort2: new FormControl(table3RawValue.resort2),
      resvNameId3: new FormControl(table3RawValue.resvNameId3),
      clientOId4: new FormControl(table3RawValue.clientOId4),
      typeChb5: new FormControl(table3RawValue.typeChb5),
      confirmationNo6: new FormControl(table3RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table3RawValue.clientMdmId7),
      nameId8: new FormControl(table3RawValue.nameId8),
      parentResvNameId9: new FormControl(table3RawValue.parentResvNameId9),
      contactId10: new FormControl(table3RawValue.contactId10),
      agenceId11: new FormControl(table3RawValue.agenceId11),
      agenceNom12: new FormControl(table3RawValue.agenceNom12),
      societeId13: new FormControl(table3RawValue.societeId13),
      groupeId14: new FormControl(table3RawValue.groupeId14),
      numBloc15: new FormControl(table3RawValue.numBloc15),
      typeResv16: new FormControl(table3RawValue.typeResv16),
      statutResv17: new FormControl(table3RawValue.statutResv17),
      dateDebutResv18: new FormControl(table3RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table3RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table3RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table3RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table3RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table3RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table3RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table3RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table3RawValue.codeGarantie26),
      flgDed27: new FormControl(table3RawValue.flgDed27),
      codePays28: new FormControl(table3RawValue.codePays28),
      libPays29: new FormControl(table3RawValue.libPays29),
      codeNationalite30: new FormControl(table3RawValue.codeNationalite30),
      libNationalite31: new FormControl(table3RawValue.libNationalite31),
      codeSource32: new FormControl(table3RawValue.codeSource32),
      libSource33: new FormControl(table3RawValue.libSource33),
      codeGrandSource34: new FormControl(table3RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table3RawValue.codeOrigine35),
      libOrigine36: new FormControl(table3RawValue.libOrigine36),
      codeMarche37: new FormControl(table3RawValue.codeMarche37),
      libMarche38: new FormControl(table3RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table3RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table3RawValue.libGrandMarche40),
      codePrix41: new FormControl(table3RawValue.codePrix41),
      categPrix42: new FormControl(table3RawValue.categPrix42),
      libPrix43: new FormControl(table3RawValue.libPrix43),
      numChb44: new FormControl(table3RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table3RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table3RawValue.codeTypeChb46),
      classChb47: new FormControl(table3RawValue.classChb47),
      caractChb48: new FormControl(table3RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table3RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table3RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table3RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table3RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table3RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table3RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table3RawValue.numCrs55),
      typeRefCrs56: new FormControl(table3RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table3RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table3RawValue.dateCreaResv58),
      datePremier59: new FormControl(table3RawValue.datePremier59),
      statutPremier60: new FormControl(table3RawValue.statutPremier60),
      dateDernier61: new FormControl(table3RawValue.dateDernier61),
      statutDernier62: new FormControl(table3RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table3RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table3RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table3RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table3RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table3RawValue.leadtime67),
      los68: new FormControl(table3RawValue.los68),
      occupantsGroupe69: new FormControl(table3RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table3RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table3RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table3RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table3RawValue.nbAdu73),
      nbEnf74: new FormControl(table3RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table3RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table3RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table3RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table3RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table3RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table3RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table3RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table3RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table3RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table3RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table3RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table3RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table3RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table3RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table3RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table3RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table3RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table3RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table3RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table3RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table3RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table3RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table3RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table3RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table3RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table3RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table3RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table3RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table3RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table3RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table3RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table3RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table3RawValue.techUpdateDate107),
      numLigne108: new FormControl(table3RawValue.numLigne108),
      resort109: new FormControl(table3RawValue.resort109),
      resvNameId110: new FormControl(table3RawValue.resvNameId110),
      clientOId111: new FormControl(table3RawValue.clientOId111),
      typeChb112: new FormControl(table3RawValue.typeChb112),
      confirmationNo113: new FormControl(table3RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table3RawValue.clientMdmId114),
      nameId115: new FormControl(table3RawValue.nameId115),
      parentResvNameId116: new FormControl(table3RawValue.parentResvNameId116),
      contactId117: new FormControl(table3RawValue.contactId117),
      agenceId118: new FormControl(table3RawValue.agenceId118),
      agenceNom119: new FormControl(table3RawValue.agenceNom119),
      societeId120: new FormControl(table3RawValue.societeId120),
      groupeId121: new FormControl(table3RawValue.groupeId121),
      numBloc122: new FormControl(table3RawValue.numBloc122),
      typeResv123: new FormControl(table3RawValue.typeResv123),
      statutResv124: new FormControl(table3RawValue.statutResv124),
      dateDebutResv125: new FormControl(table3RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table3RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table3RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table3RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table3RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table3RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table3RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table3RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table3RawValue.codeGarantie133),
      flgDed134: new FormControl(table3RawValue.flgDed134),
      codePays135: new FormControl(table3RawValue.codePays135),
      libPays136: new FormControl(table3RawValue.libPays136),
      codeNationalite137: new FormControl(table3RawValue.codeNationalite137),
      libNationalite138: new FormControl(table3RawValue.libNationalite138),
      codeSource139: new FormControl(table3RawValue.codeSource139),
      libSource140: new FormControl(table3RawValue.libSource140),
      codeGrandSource141: new FormControl(table3RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table3RawValue.codeOrigine142),
      libOrigine143: new FormControl(table3RawValue.libOrigine143),
      codeMarche144: new FormControl(table3RawValue.codeMarche144),
      libMarche145: new FormControl(table3RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table3RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table3RawValue.libGrandMarche147),
      codePrix148: new FormControl(table3RawValue.codePrix148),
      categPrix149: new FormControl(table3RawValue.categPrix149),
      libPrix150: new FormControl(table3RawValue.libPrix150),
      numChb151: new FormControl(table3RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table3RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table3RawValue.codeTypeChb153),
      classChb154: new FormControl(table3RawValue.classChb154),
      caractChb155: new FormControl(table3RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table3RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table3RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table3RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table3RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table3RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table3RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table3RawValue.numCrs162),
      typeRefCrs163: new FormControl(table3RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table3RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table3RawValue.dateCreaResv165),
      datePremier166: new FormControl(table3RawValue.datePremier166),
      statutPremier167: new FormControl(table3RawValue.statutPremier167),
      dateDernier168: new FormControl(table3RawValue.dateDernier168),
      statutDernier169: new FormControl(table3RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table3RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table3RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table3RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table3RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table3RawValue.leadtime174),
      los175: new FormControl(table3RawValue.los175),
      occupantsGroupe176: new FormControl(table3RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table3RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table3RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table3RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table3RawValue.nbAdu180),
      nbEnf181: new FormControl(table3RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table3RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table3RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table3RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table3RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table3RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table3RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table3RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table3RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table3RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table3RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table3RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table3RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table3RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table3RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table3RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table3RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table3RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table3RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table3RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table3RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table3RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table3RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table3RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table3RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table3RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table3RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table3RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table3RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table3RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table3RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table3RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table3RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table3RawValue.techUpdateDate214),
      numLigne215: new FormControl(table3RawValue.numLigne215),
      resort216: new FormControl(table3RawValue.resort216),
      resvNameId217: new FormControl(table3RawValue.resvNameId217),
      clientOId218: new FormControl(table3RawValue.clientOId218),
      typeChb219: new FormControl(table3RawValue.typeChb219),
      confirmationNo220: new FormControl(table3RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table3RawValue.clientMdmId221),
      nameId222: new FormControl(table3RawValue.nameId222),
      parentResvNameId223: new FormControl(table3RawValue.parentResvNameId223),
      contactId224: new FormControl(table3RawValue.contactId224),
      agenceId225: new FormControl(table3RawValue.agenceId225),
      agenceNom226: new FormControl(table3RawValue.agenceNom226),
      societeId227: new FormControl(table3RawValue.societeId227),
      groupeId228: new FormControl(table3RawValue.groupeId228),
      numBloc229: new FormControl(table3RawValue.numBloc229),
      typeResv230: new FormControl(table3RawValue.typeResv230),
      statutResv231: new FormControl(table3RawValue.statutResv231),
      dateDebutResv232: new FormControl(table3RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table3RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table3RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table3RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table3RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table3RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table3RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table3RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table3RawValue.codeGarantie240),
      flgDed241: new FormControl(table3RawValue.flgDed241),
      codePays242: new FormControl(table3RawValue.codePays242),
      libPays243: new FormControl(table3RawValue.libPays243),
      codeNationalite244: new FormControl(table3RawValue.codeNationalite244),
      libNationalite245: new FormControl(table3RawValue.libNationalite245),
      codeSource246: new FormControl(table3RawValue.codeSource246),
      libSource247: new FormControl(table3RawValue.libSource247),
      codeGrandSource248: new FormControl(table3RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table3RawValue.codeOrigine249),
      libOrigine250: new FormControl(table3RawValue.libOrigine250),
      codeMarche251: new FormControl(table3RawValue.codeMarche251),
      libMarche252: new FormControl(table3RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table3RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table3RawValue.libGrandMarche254),
      codePrix255: new FormControl(table3RawValue.codePrix255),
      categPrix256: new FormControl(table3RawValue.categPrix256),
      libPrix257: new FormControl(table3RawValue.libPrix257),
      numChb258: new FormControl(table3RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table3RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table3RawValue.codeTypeChb260),
      classChb261: new FormControl(table3RawValue.classChb261),
      caractChb262: new FormControl(table3RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table3RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table3RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table3RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table3RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table3RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table3RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table3RawValue.numCrs269),
      typeRefCrs270: new FormControl(table3RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table3RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table3RawValue.dateCreaResv272),
      datePremier273: new FormControl(table3RawValue.datePremier273),
      statutPremier274: new FormControl(table3RawValue.statutPremier274),
      dateDernier275: new FormControl(table3RawValue.dateDernier275),
      statutDernier276: new FormControl(table3RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table3RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table3RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table3RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table3RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table3RawValue.leadtime281),
      los282: new FormControl(table3RawValue.los282),
      occupantsGroupe283: new FormControl(table3RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table3RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table3RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table3RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table3RawValue.nbAdu287),
      nbEnf288: new FormControl(table3RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table3RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table3RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table3RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table3RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table3RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table3RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table3RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table3RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table3RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table3RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table3RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table3RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table3RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table3RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table3RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table3RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table3RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table3RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table3RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table3RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table3RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table3RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable3(form: Table3FormGroup): ITable3 | NewTable3 {
    return form.getRawValue() as ITable3 | NewTable3;
  }

  resetForm(form: Table3FormGroup, table3: Table3FormGroupInput): void {
    const table3RawValue = { ...this.getFormDefaults(), ...table3 };
    form.reset(
      {
        ...table3RawValue,
        id: { value: table3RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table3FormDefaults {
    return {
      id: null,
    };
  }
}
