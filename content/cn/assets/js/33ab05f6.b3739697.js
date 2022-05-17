"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[28715],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||i;return a?r.createElement(m,n(n({ref:t},d),{},{components:a})):r.createElement(m,n({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6631:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=a(87462),o=a(63366),i=(a(67294),a(3905)),n=["components"],l={title:"Efficient Migration of Large Parquet Tables to Apache Hudi",excerpt:"Migrating a large parquet table to Apache Hudi without having to rewrite the entire dataset.",author:"vbalaji",category:"blog"},p=void 0,s={permalink:"/cn/blog/2020/08/20/efficient-migration-of-large-parquet-tables",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-08-20-efficient-migration-of-large-parquet-tables.md",source:"@site/blog/2020-08-20-efficient-migration-of-large-parquet-tables.md",title:"Efficient Migration of Large Parquet Tables to Apache Hudi",description:"We will look at how to migrate a large parquet table to Hudi without having to rewrite the entire dataset.",date:"2020-08-20T00:00:00.000Z",formattedDate:"August 20, 2020",tags:[],readingTime:4.755,truncated:!0,authors:[{name:"vbalaji"}],prevItem:{title:"Async Compaction Deployment Models",permalink:"/cn/blog/2020/08/21/async-compaction-deployment-model"},nextItem:{title:"Incremental Processing on the Data Lake",permalink:"/cn/blog/2020/08/18/hudi-incremental-processing-on-data-lakes"}},d={authorsImageUrls:[void 0]},u=[{value:"Motivation:",id:"motivation",children:[],level:2},{value:"High Level Idea:",id:"high-level-idea",children:[{value:"Per Record Metadata:",id:"per-record-metadata",children:[],level:3}],level:2},{value:"Design Deep Dive:",id:"design-deep-dive",children:[],level:2},{value:"Migration:",id:"migration",children:[{value:"Query Engine Support:",id:"query-engine-support",children:[],level:3},{value:"Ways To Migrate :",id:"ways-to-migrate-",children:[],level:3},{value:"Configurations:",id:"configurations",children:[],level:3},{value:"Spark Data Source:",id:"spark-data-source",children:[],level:3},{value:"Hoodie DeltaStreamer:",id:"hoodie-deltastreamer",children:[],level:3},{value:"Known Caveats",id:"known-caveats",children:[],level:3}],level:2}],c={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will look at how to migrate a large parquet table to Hudi without having to rewrite the entire dataset. "),(0,i.kt)("h2",{id:"motivation"},"Motivation:"),(0,i.kt)("p",null,"Apache Hudi maintains per record metadata to perform core operations such as upserts and incremental pull. To take advantage of Hudi\u2019s upsert and incremental processing support, users would need to rewrite their whole dataset to make it an Apache Hudi table.  Hudi 0.6.0 comes with an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"experimental feature"))," to support efficient migration of large Parquet tables to Hudi without the need to rewrite the entire dataset."),(0,i.kt)("h2",{id:"high-level-idea"},"High Level Idea:"),(0,i.kt)("h3",{id:"per-record-metadata"},"Per Record Metadata:"),(0,i.kt)("p",null,"Apache Hudi maintains record level metadata for perform efficient upserts and incremental pull."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Per Record Metadata",src:a(44539).Z})),(0,i.kt)("p",null,"Apache HUDI physical file contains 3 parts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For each record, 5 HUDI metadata fields with column indices 0 to 4"),(0,i.kt)("li",{parentName:"ol"},"For each record, the original data columns that comprises the record (Original Data)"),(0,i.kt)("li",{parentName:"ol"},"Additional Hudi Metadata at file footer for index lookup")),(0,i.kt)("p",null,"The parts (1) and (3) constitute what we term as  \u201cHudi skeleton\u201d. Hudi skeleton contains additional metadata that it maintains in each physical parquet file for supporting Hudi primitives. The conceptual idea is to decouple Hudi skeleton data from original data (2). Hudi skeleton can be stored in a Hudi file while the original data is stored in an external non-Hudi file. A migration of large parquet would result in creating only Hudi skeleton files without having to rewrite original data."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"skeleton",src:a(79387).Z})),(0,i.kt)("h2",{id:"design-deep-dive"},"Design Deep Dive:"),(0,i.kt)("p",null," For a deep dive on the internals, please take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+12+%3A+Efficient+Migration+of+Large+Parquet+Tables+to+Apache+Hudi"},"RFC document")," "),(0,i.kt)("h2",{id:"migration"},"Migration:"),(0,i.kt)("p",null,"Hudi supports 2 modes when migrating parquet tables.  We will use the term bootstrap and migration interchangeably in this document.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"METADATA_ONLY : In this mode, record level metadata alone is generated for each source record and stored in new bootstrap location."),(0,i.kt)("li",{parentName:"ul"},"FULL_RECORD : In this mode, record level metadata is generated for each source record and both original record and metadata for each record copied")),(0,i.kt)("p",null,'You can pick and choose these modes at partition level. One of the common strategy would be to use FULL_RECORD mode for a small set of "hot" partitions which are accessed more frequently and METADATA_ONLY for a larger set of "warm" partitions. '),(0,i.kt)("h3",{id:"query-engine-support"},"Query Engine Support:"),(0,i.kt)("p",null,"For a METADATA_ONLY bootstrapped table, Spark - data source, Spark-Hive and native Hive query engines are supported. Presto support is in the works."),(0,i.kt)("h3",{id:"ways-to-migrate-"},"Ways To Migrate :"),(0,i.kt)("p",null,"There are 2 ways to migrate a large parquet table to Hudi. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spark Datasource Write"),(0,i.kt)("li",{parentName:"ul"},"Hudi DeltaStreamer")),(0,i.kt)("p",null,"We will look at how to migrate using both these approaches."),(0,i.kt)("h3",{id:"configurations"},"Configurations:"),(0,i.kt)("p",null,"These are bootstrap specific configurations that needs to be set in addition to regular hudi write configurations."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Configuration Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Mandatory ?"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.base.path"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Base Path of  source parquet table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.parallelism"),(0,i.kt)("td",{parentName:"tr",align:null},"1500"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Spark Parallelism used when running bootstrap")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.keygen.class"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Bootstrap Index internally used by Hudi to map Hudi skeleton and source parquet files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.mode.selector"),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.hudi.client.bootstrap.selector.MetadataOnlyBootstrapModeSelector"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"Bootstap Mode Selector class. By default, Hudi employs METADATA_ONLY boostrap for all partitions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.partitionpath.translator.class"),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.hudi.client.bootstrap.translator. IdentityBootstrapPartitionPathTranslator"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"For METADATA_ONLY bootstrap, this class allows customization of partition paths used in Hudi target dataset. By default, no customization is done and the partition paths reflects what is available in source parquet table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.full.input.provider"),(0,i.kt)("td",{parentName:"tr",align:null},"org.apache.hudi.bootstrap.SparkParquetBootstrapDataProvider"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"For FULL_RECORD bootstrap, this class provides the input RDD of Hudi records to write.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.mode.selector.regex.mode"),(0,i.kt)("td",{parentName:"tr",align:null},"METADATA_ONLY"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Bootstrap Mode used when the partition matches the regex pattern in hoodie.bootstrap.mode.selector.regex . Used only when hoodie.bootstrap.mode.selector set to BootstrapRegexModeSelector.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.bootstrap.mode.selector.regex"),(0,i.kt)("td",{parentName:"tr",align:null},".","*"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"Partition Regex used when  hoodie.bootstrap.mode.selector set to BootstrapRegexModeSelector.")))),(0,i.kt)("h3",{id:"spark-data-source"},"Spark Data Source:"),(0,i.kt)("p",null,"Here, we use a Spark Datasource Write to perform bootstrap.\nHere is an example code snippet to perform METADATA_ONLY bootstrap."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'import org.apache.hudi.{DataSourceWriteOptions, HoodieDataSourceHelpers}\nimport org.apache.hudi.config.{HoodieBootstrapConfig, HoodieWriteConfig}\nimport org.apache.hudi.keygen.SimpleKeyGenerator\nimport org.apache.spark.sql.SaveMode\n \nval bootstrapDF = spark.emptyDataFrame\nbootstrapDF.write\n      .format("hudi")\n      .option(HoodieWriteConfig.TABLE_NAME, "hoodie_test")\n      .option(DataSourceWriteOptions.OPERATION_OPT_KEY, DataSourceWriteOptions.BOOTSTRAP_OPERATION_OPT_VAL)\n      .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY, "_row_key")\n      .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY, "datestr")\n      .option(HoodieBootstrapConfig.BOOTSTRAP_BASE_PATH_PROP, srcPath)\n      .option(HoodieBootstrapConfig.BOOTSTRAP_KEYGEN_CLASS, classOf[SimpleKeyGenerator].getName)\n      .mode(SaveMode.Overwrite)\n      .save(basePath)\n')),(0,i.kt)("p",null,"Here is an example code snippet to perform METADATA_ONLY bootstrap for August 20 2020 - August 29 2020 partitions and FULL_RECORD bootstrap for other partitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'import org.apache.hudi.bootstrap.SparkParquetBootstrapDataProvider\nimport org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector\nimport org.apache.hudi.{DataSourceWriteOptions, HoodieDataSourceHelpers}\nimport org.apache.hudi.config.{HoodieBootstrapConfig, HoodieWriteConfig}\nimport org.apache.hudi.keygen.SimpleKeyGenerator\nimport org.apache.spark.sql.SaveMode\n \nval bootstrapDF = spark.emptyDataFrame\nbootstrapDF.write\n      .format("hudi")\n      .option(HoodieWriteConfig.TABLE_NAME, "hoodie_test")\n      .option(DataSourceWriteOptions.OPERATION_OPT_KEY, DataSourceWriteOptions.BOOTSTRAP_OPERATION_OPT_VAL)\n      .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY, "_row_key")\n      .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY, "datestr")\n      .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY, "timestamp")\n      .option(HoodieBootstrapConfig.BOOTSTRAP_BASE_PATH_PROP, srcPath)\n      .option(HoodieBootstrapConfig.BOOTSTRAP_KEYGEN_CLASS, classOf[SimpleKeyGenerator].getName)\n      .option(HoodieBootstrapConfig.BOOTSTRAP_MODE_SELECTOR, classOf[BootstrapRegexModeSelector].getName)\n      .option(HoodieBootstrapConfig.BOOTSTRAP_MODE_SELECTOR_REGEX, "2020/08/2[0-9]")\n      .option(HoodieBootstrapConfig.BOOTSTRAP_MODE_SELECTOR_REGEX_MODE, "METADATA_ONLY")\n      .option(HoodieBootstrapConfig.FULL_BOOTSTRAP_INPUT_PROVIDER, classOf[SparkParquetBootstrapDataProvider].getName)\n      .mode(SaveMode.Overwrite)\n      .save(basePath)\n')),(0,i.kt)("h3",{id:"hoodie-deltastreamer"},"Hoodie DeltaStreamer:"),(0,i.kt)("p",null,"Hoodie Deltastreamer allows bootstrap to be performed using --run-bootstrap command line option."),(0,i.kt)("p",null,"If you are planning to use delta-streamer after the initial boostrap to incrementally ingest data to the new hudi dataset, you need to pass either --checkpoint or --initial-checkpoint-provider to set the initial checkpoint for the deltastreamer."),(0,i.kt)("p",null,"Here is an example for running METADATA_ONLY bootstrap using Delta Streamer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spark-submit --package org.apache.hudi:hudi-spark-bundle_2.11:0.6.0\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer  \\\n--run-bootstrap \\\n--target-base-path <Hudi_Base_Path> \\\n--target-table <Hudi_Table_Name> \\\n--props <props_file> \\\n--checkpoint <initial_checkpoint_if_you_are_going_to_use_deltastreamer_to_incrementally_ingest> \\\n--hoodie-conf hoodie.bootstrap.base.path=<Parquet_Source_base_Path> \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=_row_key \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=datestr \\\n--hoodie-conf hoodie.bootstrap.keygen.class=org.apache.hudi.keygen.SimpleKeyGenerator\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"spark-submit --package org.apache.hudi:hudi-spark-bundle_2.11:0.6.0\n--conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer  \\\n--run-bootstrap \\\n--target-base-path <Hudi_Base_Path> \\\n--target-table <Hudi_Table_Name> \\\n--props <props_file> \\\n--checkpoint <initial_checkpoint_if_you_are_going_to_use_deltastreamer_to_incrementally_ingest> \\\n--hoodie-conf hoodie.bootstrap.base.path=<Parquet_Source_base_Path> \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=_row_key \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=datestr \\\n--hoodie-conf hoodie.bootstrap.keygen.class=org.apache.hudi.keygen.SimpleKeyGenerator \\\n--hoodie-conf hoodie.bootstrap.full.input.provider=org.apache.hudi.bootstrap.SparkParquetBootstrapDataProvider \\\n--hoodie-conf hoodie.bootstrap.mode.selector=org.apache.hudi.client.bootstrap.selector.BootstrapRegexModeSelector \\\n--hoodie-conf hoodie.bootstrap.mode.selector.regex=\"2020/08/2[0-9]\" \\\n--hoodie-conf hoodie.bootstrap.mode.selector.regex.mode=METADATA_ONLY\n")),(0,i.kt)("h3",{id:"known-caveats"},"Known Caveats"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Need proper defaults for the bootstrap config : hoodie.bootstrap.full.input.provider. Here is the ",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/HUDI-1213"},"ticket")),(0,i.kt)("li",{parentName:"ol"},"DeltaStreamer manages checkpoints inside hoodie commit files and expects checkpoints in previously committed metadata. Users are expected to pass checkpoint or initial checkpoint provider when performing bootstrap through deltastreamer. Such support is not present when doing bootstrap using Spark Datasource. Here is the ",(0,i.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/HUDI-1214"},"ticket"),".")))}h.isMDXComponent=!0},44539:function(e,t){t.Z="data:image/png;base64,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"},79387:function(e,t,a){t.Z=a.p+"assets/images/2020-08-20-skeleton-1d3c6260bfd7380097259276874b1322.png"}}]);