'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' : 'data-target="#xs-controllers-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' :
                                            'id="xs-controllers-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' }>
                                            <li class="link">
                                                <a href="controllers/AdminController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' : 'data-target="#xs-injectables-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' :
                                        'id="xs-injectables-links-module-AdminModule-8dddd9045aed0fe1ad27a71aa3c9d309"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' : 'data-target="#xs-controllers-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' :
                                            'id="xs-controllers-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' : 'data-target="#xs-injectables-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' :
                                        'id="xs-injectables-links-module-AppModule-58f637ab84bee66eae049706f0e61276"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' : 'data-target="#xs-controllers-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' :
                                            'id="xs-controllers-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' : 'data-target="#xs-injectables-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' :
                                        'id="xs-injectables-links-module-LoginModule-b904c0c8c92b4075b20d75b0d4207435"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' : 'data-target="#xs-controllers-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' :
                                            'id="xs-controllers-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' : 'data-target="#xs-injectables-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' :
                                        'id="xs-injectables-links-module-ProductModule-21d2f583891031b159954b39e043de3f"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' : 'data-target="#xs-controllers-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' :
                                            'id="xs-controllers-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' : 'data-target="#xs-injectables-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' :
                                        'id="xs-injectables-links-module-ProductsModule-8fc08a2d982352bb4cc1ba4332b88626"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link" >RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' : 'data-target="#xs-controllers-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' :
                                            'id="xs-controllers-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' }>
                                            <li class="link">
                                                <a href="controllers/RegisterController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' : 'data-target="#xs-injectables-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' :
                                        'id="xs-injectables-links-module-RegisterModule-80fb886ac58f376682710341d609a410"' }>
                                        <li class="link">
                                            <a href="injectables/RegisterService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AdminDto.html" data-type="entity-link" >AdminDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AproveDto.html" data-type="entity-link" >AproveDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomAttributes.html" data-type="entity-link" >CustomAttributes</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomAttributesDto.html" data-type="entity-link" >CustomAttributesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForeignNames.html" data-type="entity-link" >ForeignNames</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForeignNamesDto.html" data-type="entity-link" >ForeignNamesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Images.html" data-type="entity-link" >Images</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImagesDto.html" data-type="entity-link" >ImagesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogisticsData.html" data-type="entity-link" >LogisticsData</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogisticsDataDto.html" data-type="entity-link" >LogisticsDataDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductClass.html" data-type="entity-link" >ProductClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductClassDto.html" data-type="entity-link" >ProductClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductClassDto-1.html" data-type="entity-link" >ProductClassDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsArray.html" data-type="entity-link" >ProductsArray</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsArrayDto.html" data-type="entity-link" >ProductsArrayDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsDto.html" data-type="entity-link" >ProductsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Thumbnail.html" data-type="entity-link" >Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="classes/ThumbnailDto.html" data-type="entity-link" >ThumbnailDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePasswordDto.html" data-type="entity-link" >UpdatePasswordDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Admin.html" data-type="entity-link" >Admin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Register.html" data-type="entity-link" >Register</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePassword.html" data-type="entity-link" >UpdatePassword</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateUsernameDto.html" data-type="entity-link" >UpdateUsernameDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});