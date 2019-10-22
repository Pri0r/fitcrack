/**
 * @file Workunit.cpp
 * @brief Source file for fc_workunit entry
 * @authors Lukas Zobal (zobal.lukas(at)gmail.com)
 * @date 12. 12. 2018
 * @license MIT, see LICENSE
 */

#include <Workunit.h>
#include <SqlLoader.h>


CWorkunit::CWorkunit(DbMap & jobMap)
{
    try
    {
        this->m_id = std::stoull(jobMap["id"]);
        this->m_packageId = std::stoull(jobMap["job_id"]);
        this->m_workunitId = std::stoull(jobMap["workunit_id"]);
        this->m_hostId = std::stoull(jobMap["host_id"]);
        this->m_boincHostId = std::stoull(jobMap["boinc_host_id"]);
        this->m_startIndex = std::stoull(jobMap["start_index"]);
        this->m_startIndex2 = std::stoull(jobMap["start_index_2"]);
        this->m_hcKeyspace = std::stoull(jobMap["hc_keyspace"]);
        this->m_maskId = std::stoull(jobMap["mask_id"]);
        this->m_dictionaryId = std::stoull(jobMap["dictionary_id"]);
        this->m_duplicated = true;
        this->m_duplicate = std::stoull(jobMap["id"]);   /**< We use this only for duplicate job creation */
        this->m_retry = false;
        this->m_finished = false;
        
        this->m_finishJob = false;
    }
    catch(std::logic_error & error)
    {
        Tools::printDebugTimestamp("Error converting jobMap to PtrWorkunit: %s", error.what());
        exit(1);
    }
}


CWorkunit::CWorkunit(uint64_t & packageId, uint64_t & hostId, uint64_t & boincHostId, uint64_t & startIndex,
           uint64_t & startIndex2, uint64_t & hcKeyspace, uint64_t & maskId, uint64_t & dictionaryId,
           bool & duplicated, uint64_t & duplicate, bool & retry)
{
    this->m_id = 0;     /**< ID will be filled by BOINC*/
    this->m_packageId = packageId;
    this->m_hostId = hostId;
    this->m_boincHostId = boincHostId;
    this->m_workunitId = 0;     /**< WUID will be filled by BOINC */
    this->m_startIndex = startIndex;
    this->m_startIndex2 = startIndex2;
    this->m_hcKeyspace = hcKeyspace;
    this->m_maskId = maskId;
    this->m_dictionaryId = dictionaryId;
    this->m_duplicated = duplicated;
    this->m_duplicate = duplicate;
    this->m_retry = retry;
    this->m_finished = false;

    this->m_finishJob = false;
}


PtrWorkunit CWorkunit::create(uint64_t packageId, uint64_t hostId, uint64_t boincHostId, uint64_t startIndex,
                    uint64_t startIndex2, uint64_t hcKeyspace, uint64_t maskId, uint64_t dictionaryId,
                    bool duplicated, uint64_t duplicate, bool retry)
{
    return PtrWorkunit(new CWorkunit(packageId, hostId, boincHostId, startIndex, startIndex2, hcKeyspace, maskId, dictionaryId,
                           duplicated, duplicate, retry));
}


PtrWorkunit CWorkunit::create(DbMap & jobMap, CSqlLoader * sqlLoader)
{
    /** sqlLoader is here just for common interface in load() function */
    UNUSED(sqlLoader);
    return PtrWorkunit(new CWorkunit(jobMap));
}


std::string CWorkunit::getTableName()
{
    return Config::tableNameWorkunit;
}


/**
 * @section Table attributes getters/setters
 */

uint64_t CWorkunit::getId() const
{
    return m_id;
}


uint64_t CWorkunit::getPackageId() const
{
    return m_packageId;
}


uint64_t CWorkunit::getWorkunitId() const
{
    return m_workunitId;
}


uint64_t CWorkunit::getHostId() const
{
    return m_hostId;
}


uint64_t CWorkunit::getBoincHostId() const
{
    return m_boincHostId;
}


uint64_t CWorkunit::getStartIndex() const
{
    return m_startIndex;
}


uint64_t CWorkunit::getStartIndex2() const
{
    return m_startIndex2;
}


uint64_t CWorkunit::getHcKeyspace() const
{
    return m_hcKeyspace;
}


uint64_t CWorkunit::getMaskId() const
{
    return m_maskId;
}


uint64_t CWorkunit::getDictionaryId() const
{
    return m_dictionaryId;
}


bool CWorkunit::isDuplicated() const
{
    return m_duplicated;
}


uint64_t CWorkunit::getDuplicate() const
{
    return m_duplicate;
}


bool CWorkunit::isRetry() const
{
    return m_retry;
}


bool CWorkunit::isFinished() const
{
    return m_finished;
}


bool CWorkunit::isFinishJob() const
{
    return m_finishJob;
}


void CWorkunit::setWorkunitId(uint64_t workunitId)
{
    m_workunitId = workunitId;
}


void CWorkunit::setHcKeyspace(uint64_t hcKeyspace)
{
    m_hcKeyspace = hcKeyspace;
}


void CWorkunit::setRetry(bool retry)
{
    m_retry = retry;
}


void CWorkunit::setHostId(uint64_t hostId)
{
    m_hostId = hostId;
}


void CWorkunit::setBoincHostId(uint64_t boincHostId)
{
    m_boincHostId = boincHostId;
}


void CWorkunit::setDuplicated(bool duplicated)
{
    m_duplicated = duplicated;
}


void CWorkunit::setDuplicate(uint64_t duplicate)
{
    m_duplicate = duplicate;
}
