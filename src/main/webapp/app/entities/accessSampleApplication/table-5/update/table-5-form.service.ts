import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable5, NewTable5 } from '../table-5.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable5 for edit and NewTable5FormGroupInput for create.
 */
type Table5FormGroupInput = ITable5 | PartialWithRequiredKeyOf<NewTable5>;

type Table5FormDefaults = Pick<NewTable5, 'id'>;

type Table5FormGroupContent = {
  id: FormControl<ITable5['id'] | NewTable5['id']>;
  numLigne1: FormControl<ITable5['numLigne1']>;
  resort2: FormControl<ITable5['resort2']>;
  resvNameId3: FormControl<ITable5['resvNameId3']>;
  clientOId4: FormControl<ITable5['clientOId4']>;
  typeChb5: FormControl<ITable5['typeChb5']>;
  confirmationNo6: FormControl<ITable5['confirmationNo6']>;
  clientMdmId7: FormControl<ITable5['clientMdmId7']>;
  nameId8: FormControl<ITable5['nameId8']>;
  parentResvNameId9: FormControl<ITable5['parentResvNameId9']>;
  contactId10: FormControl<ITable5['contactId10']>;
  agenceId11: FormControl<ITable5['agenceId11']>;
  agenceNom12: FormControl<ITable5['agenceNom12']>;
  societeId13: FormControl<ITable5['societeId13']>;
  groupeId14: FormControl<ITable5['groupeId14']>;
  numBloc15: FormControl<ITable5['numBloc15']>;
  typeResv16: FormControl<ITable5['typeResv16']>;
  statutResv17: FormControl<ITable5['statutResv17']>;
  dateDebutResv18: FormControl<ITable5['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable5['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable5['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable5['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable5['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable5['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable5['createurResv24']>;
  nomCreateurResv25: FormControl<ITable5['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable5['codeGarantie26']>;
  flgDed27: FormControl<ITable5['flgDed27']>;
  codePays28: FormControl<ITable5['codePays28']>;
  libPays29: FormControl<ITable5['libPays29']>;
  codeNationalite30: FormControl<ITable5['codeNationalite30']>;
  libNationalite31: FormControl<ITable5['libNationalite31']>;
  codeSource32: FormControl<ITable5['codeSource32']>;
  libSource33: FormControl<ITable5['libSource33']>;
  codeGrandSource34: FormControl<ITable5['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable5['codeOrigine35']>;
  libOrigine36: FormControl<ITable5['libOrigine36']>;
  codeMarche37: FormControl<ITable5['codeMarche37']>;
  libMarche38: FormControl<ITable5['libMarche38']>;
  codeGrandMarche39: FormControl<ITable5['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable5['libGrandMarche40']>;
  codePrix41: FormControl<ITable5['codePrix41']>;
  categPrix42: FormControl<ITable5['categPrix42']>;
  libPrix43: FormControl<ITable5['libPrix43']>;
  numChb44: FormControl<ITable5['numChb44']>;
  descriptionTypeChb45: FormControl<ITable5['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable5['codeTypeChb46']>;
  classChb47: FormControl<ITable5['classChb47']>;
  caractChb48: FormControl<ITable5['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable5['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable5['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable5['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable5['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable5['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable5['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable5['numCrs55']>;
  typeRefCrs56: FormControl<ITable5['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable5['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable5['dateCreaResv58']>;
  datePremier59: FormControl<ITable5['datePremier59']>;
  statutPremier60: FormControl<ITable5['statutPremier60']>;
  dateDernier61: FormControl<ITable5['dateDernier61']>;
  statutDernier62: FormControl<ITable5['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable5['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable5['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable5['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable5['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable5['leadtime67']>;
  los68: FormControl<ITable5['los68']>;
  occupantsGroupe69: FormControl<ITable5['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable5['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable5['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable5['nbResvAnn72']>;
  nbAdu73: FormControl<ITable5['nbAdu73']>;
  nbEnf74: FormControl<ITable5['nbEnf74']>;
  nbPersDayU75: FormControl<ITable5['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable5['nbPersArr76']>;
  nbPersDep77: FormControl<ITable5['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable5['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable5['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable5['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable5['nbChbArr81']>;
  nbChbDep82: FormControl<ITable5['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable5['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable5['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable5['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable5['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable5['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable5['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable5['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable5['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable5['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable5['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable5['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable5['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable5['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable5['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable5['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable5['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable5['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable5['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable5['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable5['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable5['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable5['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable5['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable5['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable5['techUpdateDate107']>;
  numLigne108: FormControl<ITable5['numLigne108']>;
  resort109: FormControl<ITable5['resort109']>;
  resvNameId110: FormControl<ITable5['resvNameId110']>;
  clientOId111: FormControl<ITable5['clientOId111']>;
  typeChb112: FormControl<ITable5['typeChb112']>;
  confirmationNo113: FormControl<ITable5['confirmationNo113']>;
  clientMdmId114: FormControl<ITable5['clientMdmId114']>;
  nameId115: FormControl<ITable5['nameId115']>;
  parentResvNameId116: FormControl<ITable5['parentResvNameId116']>;
  contactId117: FormControl<ITable5['contactId117']>;
  agenceId118: FormControl<ITable5['agenceId118']>;
  agenceNom119: FormControl<ITable5['agenceNom119']>;
  societeId120: FormControl<ITable5['societeId120']>;
  groupeId121: FormControl<ITable5['groupeId121']>;
  numBloc122: FormControl<ITable5['numBloc122']>;
  typeResv123: FormControl<ITable5['typeResv123']>;
  statutResv124: FormControl<ITable5['statutResv124']>;
  dateDebutResv125: FormControl<ITable5['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable5['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable5['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable5['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable5['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable5['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable5['createurResv131']>;
  nomCreateurResv132: FormControl<ITable5['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable5['codeGarantie133']>;
  flgDed134: FormControl<ITable5['flgDed134']>;
  codePays135: FormControl<ITable5['codePays135']>;
  libPays136: FormControl<ITable5['libPays136']>;
  codeNationalite137: FormControl<ITable5['codeNationalite137']>;
  libNationalite138: FormControl<ITable5['libNationalite138']>;
  codeSource139: FormControl<ITable5['codeSource139']>;
  libSource140: FormControl<ITable5['libSource140']>;
  codeGrandSource141: FormControl<ITable5['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable5['codeOrigine142']>;
  libOrigine143: FormControl<ITable5['libOrigine143']>;
  codeMarche144: FormControl<ITable5['codeMarche144']>;
  libMarche145: FormControl<ITable5['libMarche145']>;
  codeGrandMarche146: FormControl<ITable5['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable5['libGrandMarche147']>;
  codePrix148: FormControl<ITable5['codePrix148']>;
  categPrix149: FormControl<ITable5['categPrix149']>;
  libPrix150: FormControl<ITable5['libPrix150']>;
  numChb151: FormControl<ITable5['numChb151']>;
  descriptionTypeChb152: FormControl<ITable5['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable5['codeTypeChb153']>;
  classChb154: FormControl<ITable5['classChb154']>;
  caractChb155: FormControl<ITable5['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable5['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable5['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable5['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable5['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable5['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable5['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable5['numCrs162']>;
  typeRefCrs163: FormControl<ITable5['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable5['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable5['dateCreaResv165']>;
  datePremier166: FormControl<ITable5['datePremier166']>;
  statutPremier167: FormControl<ITable5['statutPremier167']>;
  dateDernier168: FormControl<ITable5['dateDernier168']>;
  statutDernier169: FormControl<ITable5['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable5['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable5['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable5['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable5['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable5['leadtime174']>;
  los175: FormControl<ITable5['los175']>;
  occupantsGroupe176: FormControl<ITable5['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable5['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable5['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable5['nbResvAnn179']>;
  nbAdu180: FormControl<ITable5['nbAdu180']>;
  nbEnf181: FormControl<ITable5['nbEnf181']>;
  nbPersDayU182: FormControl<ITable5['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable5['nbPersArr183']>;
  nbPersDep184: FormControl<ITable5['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable5['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable5['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable5['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable5['nbChbArr188']>;
  nbChbDep189: FormControl<ITable5['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable5['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable5['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable5['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable5['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable5['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable5['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable5['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable5['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable5['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable5['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable5['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable5['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable5['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable5['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable5['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable5['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable5['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable5['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable5['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable5['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable5['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable5['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable5['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable5['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable5['techUpdateDate214']>;
  numLigne215: FormControl<ITable5['numLigne215']>;
  resort216: FormControl<ITable5['resort216']>;
  resvNameId217: FormControl<ITable5['resvNameId217']>;
  clientOId218: FormControl<ITable5['clientOId218']>;
  typeChb219: FormControl<ITable5['typeChb219']>;
  confirmationNo220: FormControl<ITable5['confirmationNo220']>;
  clientMdmId221: FormControl<ITable5['clientMdmId221']>;
  nameId222: FormControl<ITable5['nameId222']>;
  parentResvNameId223: FormControl<ITable5['parentResvNameId223']>;
  contactId224: FormControl<ITable5['contactId224']>;
  agenceId225: FormControl<ITable5['agenceId225']>;
  agenceNom226: FormControl<ITable5['agenceNom226']>;
  societeId227: FormControl<ITable5['societeId227']>;
  groupeId228: FormControl<ITable5['groupeId228']>;
  numBloc229: FormControl<ITable5['numBloc229']>;
  typeResv230: FormControl<ITable5['typeResv230']>;
  statutResv231: FormControl<ITable5['statutResv231']>;
  dateDebutResv232: FormControl<ITable5['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable5['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable5['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable5['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable5['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable5['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable5['createurResv238']>;
  nomCreateurResv239: FormControl<ITable5['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable5['codeGarantie240']>;
  flgDed241: FormControl<ITable5['flgDed241']>;
  codePays242: FormControl<ITable5['codePays242']>;
  libPays243: FormControl<ITable5['libPays243']>;
  codeNationalite244: FormControl<ITable5['codeNationalite244']>;
  libNationalite245: FormControl<ITable5['libNationalite245']>;
  codeSource246: FormControl<ITable5['codeSource246']>;
  libSource247: FormControl<ITable5['libSource247']>;
  codeGrandSource248: FormControl<ITable5['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable5['codeOrigine249']>;
  libOrigine250: FormControl<ITable5['libOrigine250']>;
  codeMarche251: FormControl<ITable5['codeMarche251']>;
  libMarche252: FormControl<ITable5['libMarche252']>;
  codeGrandMarche253: FormControl<ITable5['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable5['libGrandMarche254']>;
  codePrix255: FormControl<ITable5['codePrix255']>;
  categPrix256: FormControl<ITable5['categPrix256']>;
  libPrix257: FormControl<ITable5['libPrix257']>;
  numChb258: FormControl<ITable5['numChb258']>;
  descriptionTypeChb259: FormControl<ITable5['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable5['codeTypeChb260']>;
  classChb261: FormControl<ITable5['classChb261']>;
  caractChb262: FormControl<ITable5['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable5['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable5['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable5['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable5['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable5['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable5['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable5['numCrs269']>;
  typeRefCrs270: FormControl<ITable5['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable5['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable5['dateCreaResv272']>;
  datePremier273: FormControl<ITable5['datePremier273']>;
  statutPremier274: FormControl<ITable5['statutPremier274']>;
  dateDernier275: FormControl<ITable5['dateDernier275']>;
  statutDernier276: FormControl<ITable5['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable5['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable5['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable5['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable5['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable5['leadtime281']>;
  los282: FormControl<ITable5['los282']>;
  occupantsGroupe283: FormControl<ITable5['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable5['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable5['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable5['nbResvAnn286']>;
  nbAdu287: FormControl<ITable5['nbAdu287']>;
  nbEnf288: FormControl<ITable5['nbEnf288']>;
  nbPersDayU289: FormControl<ITable5['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable5['nbPersArr290']>;
  nbPersDep291: FormControl<ITable5['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable5['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable5['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable5['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable5['nbChbArr295']>;
  nbChbDep296: FormControl<ITable5['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable5['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable5['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable5['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable5['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable5['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable5['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable5['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable5['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable5['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable5['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable5['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable5['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable5['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable5['revenuTaxeExtraGlobal310']>;
};

export type Table5FormGroup = FormGroup<Table5FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table5FormService {
  createTable5FormGroup(table5: Table5FormGroupInput = { id: null }): Table5FormGroup {
    const table5RawValue = {
      ...this.getFormDefaults(),
      ...table5,
    };
    return new FormGroup<Table5FormGroupContent>({
      id: new FormControl(
        { value: table5RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table5RawValue.numLigne1),
      resort2: new FormControl(table5RawValue.resort2),
      resvNameId3: new FormControl(table5RawValue.resvNameId3),
      clientOId4: new FormControl(table5RawValue.clientOId4),
      typeChb5: new FormControl(table5RawValue.typeChb5),
      confirmationNo6: new FormControl(table5RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table5RawValue.clientMdmId7),
      nameId8: new FormControl(table5RawValue.nameId8),
      parentResvNameId9: new FormControl(table5RawValue.parentResvNameId9),
      contactId10: new FormControl(table5RawValue.contactId10),
      agenceId11: new FormControl(table5RawValue.agenceId11),
      agenceNom12: new FormControl(table5RawValue.agenceNom12),
      societeId13: new FormControl(table5RawValue.societeId13),
      groupeId14: new FormControl(table5RawValue.groupeId14),
      numBloc15: new FormControl(table5RawValue.numBloc15),
      typeResv16: new FormControl(table5RawValue.typeResv16),
      statutResv17: new FormControl(table5RawValue.statutResv17),
      dateDebutResv18: new FormControl(table5RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table5RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table5RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table5RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table5RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table5RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table5RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table5RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table5RawValue.codeGarantie26),
      flgDed27: new FormControl(table5RawValue.flgDed27),
      codePays28: new FormControl(table5RawValue.codePays28),
      libPays29: new FormControl(table5RawValue.libPays29),
      codeNationalite30: new FormControl(table5RawValue.codeNationalite30),
      libNationalite31: new FormControl(table5RawValue.libNationalite31),
      codeSource32: new FormControl(table5RawValue.codeSource32),
      libSource33: new FormControl(table5RawValue.libSource33),
      codeGrandSource34: new FormControl(table5RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table5RawValue.codeOrigine35),
      libOrigine36: new FormControl(table5RawValue.libOrigine36),
      codeMarche37: new FormControl(table5RawValue.codeMarche37),
      libMarche38: new FormControl(table5RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table5RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table5RawValue.libGrandMarche40),
      codePrix41: new FormControl(table5RawValue.codePrix41),
      categPrix42: new FormControl(table5RawValue.categPrix42),
      libPrix43: new FormControl(table5RawValue.libPrix43),
      numChb44: new FormControl(table5RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table5RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table5RawValue.codeTypeChb46),
      classChb47: new FormControl(table5RawValue.classChb47),
      caractChb48: new FormControl(table5RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table5RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table5RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table5RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table5RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table5RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table5RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table5RawValue.numCrs55),
      typeRefCrs56: new FormControl(table5RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table5RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table5RawValue.dateCreaResv58),
      datePremier59: new FormControl(table5RawValue.datePremier59),
      statutPremier60: new FormControl(table5RawValue.statutPremier60),
      dateDernier61: new FormControl(table5RawValue.dateDernier61),
      statutDernier62: new FormControl(table5RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table5RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table5RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table5RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table5RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table5RawValue.leadtime67),
      los68: new FormControl(table5RawValue.los68),
      occupantsGroupe69: new FormControl(table5RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table5RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table5RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table5RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table5RawValue.nbAdu73),
      nbEnf74: new FormControl(table5RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table5RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table5RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table5RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table5RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table5RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table5RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table5RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table5RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table5RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table5RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table5RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table5RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table5RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table5RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table5RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table5RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table5RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table5RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table5RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table5RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table5RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table5RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table5RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table5RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table5RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table5RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table5RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table5RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table5RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table5RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table5RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table5RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table5RawValue.techUpdateDate107),
      numLigne108: new FormControl(table5RawValue.numLigne108),
      resort109: new FormControl(table5RawValue.resort109),
      resvNameId110: new FormControl(table5RawValue.resvNameId110),
      clientOId111: new FormControl(table5RawValue.clientOId111),
      typeChb112: new FormControl(table5RawValue.typeChb112),
      confirmationNo113: new FormControl(table5RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table5RawValue.clientMdmId114),
      nameId115: new FormControl(table5RawValue.nameId115),
      parentResvNameId116: new FormControl(table5RawValue.parentResvNameId116),
      contactId117: new FormControl(table5RawValue.contactId117),
      agenceId118: new FormControl(table5RawValue.agenceId118),
      agenceNom119: new FormControl(table5RawValue.agenceNom119),
      societeId120: new FormControl(table5RawValue.societeId120),
      groupeId121: new FormControl(table5RawValue.groupeId121),
      numBloc122: new FormControl(table5RawValue.numBloc122),
      typeResv123: new FormControl(table5RawValue.typeResv123),
      statutResv124: new FormControl(table5RawValue.statutResv124),
      dateDebutResv125: new FormControl(table5RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table5RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table5RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table5RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table5RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table5RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table5RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table5RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table5RawValue.codeGarantie133),
      flgDed134: new FormControl(table5RawValue.flgDed134),
      codePays135: new FormControl(table5RawValue.codePays135),
      libPays136: new FormControl(table5RawValue.libPays136),
      codeNationalite137: new FormControl(table5RawValue.codeNationalite137),
      libNationalite138: new FormControl(table5RawValue.libNationalite138),
      codeSource139: new FormControl(table5RawValue.codeSource139),
      libSource140: new FormControl(table5RawValue.libSource140),
      codeGrandSource141: new FormControl(table5RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table5RawValue.codeOrigine142),
      libOrigine143: new FormControl(table5RawValue.libOrigine143),
      codeMarche144: new FormControl(table5RawValue.codeMarche144),
      libMarche145: new FormControl(table5RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table5RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table5RawValue.libGrandMarche147),
      codePrix148: new FormControl(table5RawValue.codePrix148),
      categPrix149: new FormControl(table5RawValue.categPrix149),
      libPrix150: new FormControl(table5RawValue.libPrix150),
      numChb151: new FormControl(table5RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table5RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table5RawValue.codeTypeChb153),
      classChb154: new FormControl(table5RawValue.classChb154),
      caractChb155: new FormControl(table5RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table5RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table5RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table5RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table5RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table5RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table5RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table5RawValue.numCrs162),
      typeRefCrs163: new FormControl(table5RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table5RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table5RawValue.dateCreaResv165),
      datePremier166: new FormControl(table5RawValue.datePremier166),
      statutPremier167: new FormControl(table5RawValue.statutPremier167),
      dateDernier168: new FormControl(table5RawValue.dateDernier168),
      statutDernier169: new FormControl(table5RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table5RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table5RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table5RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table5RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table5RawValue.leadtime174),
      los175: new FormControl(table5RawValue.los175),
      occupantsGroupe176: new FormControl(table5RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table5RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table5RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table5RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table5RawValue.nbAdu180),
      nbEnf181: new FormControl(table5RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table5RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table5RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table5RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table5RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table5RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table5RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table5RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table5RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table5RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table5RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table5RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table5RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table5RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table5RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table5RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table5RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table5RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table5RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table5RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table5RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table5RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table5RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table5RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table5RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table5RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table5RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table5RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table5RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table5RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table5RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table5RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table5RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table5RawValue.techUpdateDate214),
      numLigne215: new FormControl(table5RawValue.numLigne215),
      resort216: new FormControl(table5RawValue.resort216),
      resvNameId217: new FormControl(table5RawValue.resvNameId217),
      clientOId218: new FormControl(table5RawValue.clientOId218),
      typeChb219: new FormControl(table5RawValue.typeChb219),
      confirmationNo220: new FormControl(table5RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table5RawValue.clientMdmId221),
      nameId222: new FormControl(table5RawValue.nameId222),
      parentResvNameId223: new FormControl(table5RawValue.parentResvNameId223),
      contactId224: new FormControl(table5RawValue.contactId224),
      agenceId225: new FormControl(table5RawValue.agenceId225),
      agenceNom226: new FormControl(table5RawValue.agenceNom226),
      societeId227: new FormControl(table5RawValue.societeId227),
      groupeId228: new FormControl(table5RawValue.groupeId228),
      numBloc229: new FormControl(table5RawValue.numBloc229),
      typeResv230: new FormControl(table5RawValue.typeResv230),
      statutResv231: new FormControl(table5RawValue.statutResv231),
      dateDebutResv232: new FormControl(table5RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table5RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table5RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table5RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table5RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table5RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table5RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table5RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table5RawValue.codeGarantie240),
      flgDed241: new FormControl(table5RawValue.flgDed241),
      codePays242: new FormControl(table5RawValue.codePays242),
      libPays243: new FormControl(table5RawValue.libPays243),
      codeNationalite244: new FormControl(table5RawValue.codeNationalite244),
      libNationalite245: new FormControl(table5RawValue.libNationalite245),
      codeSource246: new FormControl(table5RawValue.codeSource246),
      libSource247: new FormControl(table5RawValue.libSource247),
      codeGrandSource248: new FormControl(table5RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table5RawValue.codeOrigine249),
      libOrigine250: new FormControl(table5RawValue.libOrigine250),
      codeMarche251: new FormControl(table5RawValue.codeMarche251),
      libMarche252: new FormControl(table5RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table5RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table5RawValue.libGrandMarche254),
      codePrix255: new FormControl(table5RawValue.codePrix255),
      categPrix256: new FormControl(table5RawValue.categPrix256),
      libPrix257: new FormControl(table5RawValue.libPrix257),
      numChb258: new FormControl(table5RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table5RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table5RawValue.codeTypeChb260),
      classChb261: new FormControl(table5RawValue.classChb261),
      caractChb262: new FormControl(table5RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table5RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table5RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table5RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table5RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table5RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table5RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table5RawValue.numCrs269),
      typeRefCrs270: new FormControl(table5RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table5RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table5RawValue.dateCreaResv272),
      datePremier273: new FormControl(table5RawValue.datePremier273),
      statutPremier274: new FormControl(table5RawValue.statutPremier274),
      dateDernier275: new FormControl(table5RawValue.dateDernier275),
      statutDernier276: new FormControl(table5RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table5RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table5RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table5RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table5RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table5RawValue.leadtime281),
      los282: new FormControl(table5RawValue.los282),
      occupantsGroupe283: new FormControl(table5RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table5RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table5RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table5RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table5RawValue.nbAdu287),
      nbEnf288: new FormControl(table5RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table5RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table5RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table5RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table5RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table5RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table5RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table5RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table5RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table5RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table5RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table5RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table5RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table5RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table5RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table5RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table5RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table5RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table5RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table5RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table5RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table5RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table5RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable5(form: Table5FormGroup): ITable5 | NewTable5 {
    return form.getRawValue() as ITable5 | NewTable5;
  }

  resetForm(form: Table5FormGroup, table5: Table5FormGroupInput): void {
    const table5RawValue = { ...this.getFormDefaults(), ...table5 };
    form.reset(
      {
        ...table5RawValue,
        id: { value: table5RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table5FormDefaults {
    return {
      id: null,
    };
  }
}
